import React from "react";
import { IMovie } from "../../models/movie";
import { MovieCard } from "../movie-card";
import styles from "./index.module.css";

interface IProps {
  movies?: IMovie[];
}

export const MoviesList: React.FC<IProps> = ({ movies }) => {
  return (
    <ul className={styles.list}>
      {movies?.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};
