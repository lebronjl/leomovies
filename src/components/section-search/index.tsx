import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context";
import styles from "./index.module.css";
import { useSearchMovies } from "./use-search-movies";

export const SectionSearch: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);
  const [inputQuery, setInputQuery] = useState(state.query);
  const movies = useSearchMovies();

  useEffect(() => {
    setInputQuery(state.query);
  }, [state.query]);

  return (
    <section role="grid">
      <div className={styles.container}>
        <form
          className={styles.form}
          onSubmit={(event) => {
            event.preventDefault();
            dispatch({ type: "SET_QUERY", payload: inputQuery });
          }}
        >
          <input
            type="text"
            className={styles.input}
            id="search"
            name="search"
            value={inputQuery}
            onChange={(event) => {
              setInputQuery(event?.target.value);
            }}
          />
          <button type="submit" className={styles.button}>
            Search
          </button>
        </form>
      </div>
      <ul>
        {movies?.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </section>
  );
};
