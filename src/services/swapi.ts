import axios from 'axios'
import { ApiResponse, Film } from '../types'

const swapiClient = axios.create({
  baseURL: 'https://swapi.dev/api'
})

export const getFilms = async () => {
  const res = await swapiClient.get<ApiResponse<Film>>('/films')

  return res.data
}
