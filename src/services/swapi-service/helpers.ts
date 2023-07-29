import axios from "axios";

import { config } from "../../config";
import { ApiResponse } from "../../types";
import { redisClient } from "../redis-service";

const swapiClient = axios.create({
  baseURL: "https://swapi.dev/api",
});

const transformResource = <T>(item: T) => {
  const values = item as T & { url?: string };

  const url = values?.url?.split("/");
  if (url)
    return {
      id: parseInt(url[url.length - 2]),
      ...item,
    };
  return item;
};

export const getResource = async <T>(url: string) => {
  const key = `swapi-request-${url}`;

  console.log("Searching cache key for swapi: ", key);

  const hit = await redisClient.get(key);

  if (hit) {
    console.log("CACHE KEY founded", key);

    return JSON.parse(hit);
  }

  const res = await swapiClient.get<T>(url);

  const data = res.data;

  await redisClient.set(key, JSON.stringify(data), {
    EX: config.swapiCacheTime,
  });

  return data;
};

export const getAllFromResource = async <T>(url: string) => {
  const res = await getResource<ApiResponse<T>>(`${url}?page=1`);

  const totalPages = Math.ceil(res.count / res.results.length);
  const rest = Array.from(
    {
      length: totalPages - 1,
    },
    (_, i) => getResource<ApiResponse<T>>(`${url}?page=${2 + i}`),
  );

  const restResults = await Promise.all(rest);

  const totalResults: T[] = [
    {
      results: res.results,
    },
    ...restResults,
  ].reduce((allResults, { results }) => {
    return [...allResults, ...results];
  }, []);
  return totalResults.map((item) => transformResource(item));
};
