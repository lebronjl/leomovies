import { IMovie } from "./movie";

export interface IMoviesPage {
  page: number;
  movies: IMovie[];
  totalPages: number;
  totalResults: number;
}
