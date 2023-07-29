import { createClient, RedisClientType } from "redis";

import { config } from "../config";
export let redisClient: RedisClientType;

(async () => {
  if (!config.cache) return;
  if (!redisClient) {
    redisClient = createClient({
      url: config.redisUrl,
    });
  }

  await redisClient.connect();
})();
