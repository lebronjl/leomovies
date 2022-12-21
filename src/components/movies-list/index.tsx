import React from "react";
import { IMovie } from "../../models/movie";

interface IProps {
  movies?: IMovie[];
}

export const MoviesList: React.FC<IProps> = ({ movies }) => {
  return (
    <ul>
      {movies?.map((movie) => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </ul>
  );
};
