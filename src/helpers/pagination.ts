import { config } from "../config";

export const getPagination = <T>(
  data: T[],
  options: { limit?: number; page: number },
) => {
  const itemsPerPage = options.limit ?? config.defaultItemsPerPage;
  const start = (options.page - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  return {
    data: data.slice(start, end),
    totalPages: Math.ceil(data.length / itemsPerPage),
    limit: itemsPerPage,
    total: data.length,
  };
};
