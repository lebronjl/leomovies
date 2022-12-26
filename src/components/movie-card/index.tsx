import React, { useContext } from "react";
import { AppContext } from "../../context";
import { IMovie } from "../../models/movie";
import { TmdbConstants } from "../../models/tmdb-constants";
import { FavouriteIcon } from "../favourite-icon";
import { WatchLaterIcon } from "../watch-later-icon";
import styles from "./index.module.css";

interface IProps {
  movie: IMovie;
}

export const MovieCard: React.FC<IProps> = ({ movie }) => {
  const { state, dispatch } = useContext(AppContext);

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
        <div className={styles.actionsContainer}>
          <FavouriteIcon
            color={
              state.favouriteMovies.some((i) => i.id === movie.id)
                ? "red"
                : "grey"
            }
            onClick={() => {
              dispatch({ type: "TOGGLE_FAVOURITE", payload: movie });
            }}
          />
          <WatchLaterIcon
            color={
              state.watchLaterMovies.some((i) => i.id === movie.id)
                ? "blue"
                : "grey"
            }
            onClick={() => {
              dispatch({ type: "TOGGLE_WATCH_LATER", payload: movie });
            }}
          />
        </div>
      </div>
    </li>
  );
};
