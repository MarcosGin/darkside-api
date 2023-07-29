import axios from "axios";

import { Film, People, Planet, Starship } from "../../types";
import { getAllFromResource } from "./helpers";

const swapiClient = axios.create({
  baseURL: "https://swapi.dev/api",
});

export const getFilms = async () => {
  const res = await getAllFromResource<Film>("/films");

  return res;
};

export const getFilmById = async (id: string) => {
  const res = await swapiClient.get<Film>(`/films/${id}`);

  return res.data;
};

export const getPeople = async () => {
  const res = await getAllFromResource<People>("/people");

  return res;
};

export const getPeopleById = async (id: string) => {
  const res = await swapiClient.get<People>(`/people/${id}`);

  return res.data;
};

export const getPlanets = async () => {
  const data = await getAllFromResource<Planet>("/planets");

  return data;
};

export const getPlanetById = async (id: string) => {
  const res = await swapiClient.get<Planet>(`/planets/${id}`);

  return res.data;
};

export const getStarships = async () => {
  const data = await getAllFromResource<Starship>("/starships");

  return data;
};

export const getStarshipById = async (id: string) => {
  const res = await swapiClient.get<Starship>(`/starships/${id}`);

  return res.data;
};
