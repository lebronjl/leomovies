import React from "react";
import { IMovie } from "../../models/movie";
import { MovieCard } from "../movie-card";
import styles from "./index.module.css";

interface IProps {
  movies?: IMovie[];
  noDataMessage?: string;
  emptyListMessage?: string;
}

export const MoviesList: React.FC<IProps> = ({
  movies,
  noDataMessage,
  emptyListMessage,
}) => {
  const renderMessage = (message?: string) => (
    <div className={styles.messageContainer}>
      <span role="note" className={styles.message}>
        {message}
      </span>
    </div>
  );

  if (!movies) {
    return renderMessage(noDataMessage);
  }

  if (movies.length === 0) {
    return renderMessage(emptyListMessage);
  }

  return (
    <ul className={styles.list}>
      {movies?.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};
