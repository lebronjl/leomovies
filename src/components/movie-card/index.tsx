import React from "react";
import { IMovie } from "../../models/movie";
import { TmdbConstants } from "../../models/tmdb-constants";
import styles from "./index.module.css";

interface IProps {
  movie: IMovie;
}

export const MovieCard: React.FC<IProps> = ({ movie }) => {
  return (
    <li className={styles.card} key={movie.id}>
      {movie.posterPath ? (
        <img
          className={styles.posterImage}
          alt="movie poster"
          src={`${TmdbConstants.imagesUrlPrefix}${movie.posterPath}`}
        ></img>
      ) : (
        <div className={styles.noPosterContainer} role="img">
          <span className={styles.noPosterText}>No poster available</span>
        </div>
      )}
      <div className={styles.titleOverlay}>
        <span className={styles.title}>{movie.title}</span>
      </div>
    </li>
  );
};
