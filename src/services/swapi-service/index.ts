import { Film, People, Planet, Starship } from "../../types";
import { getAllFromResource, getOneFromResource } from "./helpers";

export const getFilms = async () => {
  const res = await getAllFromResource<Film>("/films");

  return res;
};

export const getFilmById = async (id: string, populate?: string[]) => {
  const res = await getOneFromResource<Film>(`/films/${id}`, populate);

  return res;
};

export const getPeople = async (ids?: number[]) => {
  const res = await getAllFromResource<People>("/people");

  if (ids) {
    return res.filter((person) => ids.includes(person.id));
  }

  return res;
};

export const getPeopleById = async (id: string, populate?: string[]) => {
  const res = await getOneFromResource<People>(`/people/${id}`, populate);

  return res;
};

export const getPlanets = async () => {
  const data = await getAllFromResource<Planet>("/planets");

  return data;
};

export const getPlanetById = async (id: string, populate?: string[]) => {
  const res = await getOneFromResource<Planet>(`/planets/${id}`, populate);

  return res;
};

export const getStarships = async () => {
  const data = await getAllFromResource<Starship>("/starships");

  return data;
};

export const getStarshipById = async (id: string, populate?: string[]) => {
  const res = await getOneFromResource<Starship>(`/starships/${id}`, populate);

  return res;
};
