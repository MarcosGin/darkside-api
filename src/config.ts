export const config = {
  port: process.env.PORT || 8080,
  cache: true,
  cacheTime: 60 * 5,
  swapiCacheTime: 60 * 60 * 24, // 1day
  redisUrl: process.env.REDIS_URL,
};
