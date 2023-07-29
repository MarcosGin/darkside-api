import { NextFunction, Request, Response } from "express";

import { config } from "../config";
import { redisClient } from "../services/redis-service";

interface Options {
  expire?: number;
}

export const cacheMiddleware = (options: Options) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    if (!config.cache) {
      console.log("Enable cache in config.");
      return next();
    }

    if (req.method !== "GET") {
      console.log("Method no allowed for cache.");

      return next();
    }
    const key = "-cache-" + req.originalUrl || req.url;
    const hit = await redisClient.get(key);

    if (hit) {
      const data = JSON.parse(hit);

      res.json(data);
    } else {
      const json = res.json.bind(res);

      res.json = (body) => {
        const ret = json(body);
        const data = JSON.stringify(body);
        redisClient.set(key, data, {
          EX: options?.expire ?? config.cacheTime,
        });
        return ret;
      };
      next();
    }
  };
};
