import React, { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../context";
import styles from "./index.module.css";
import { useIsElementVisible } from "./use-is-element-visible";
import { useSearchMovies } from "./use-search-movies";

export const SectionSearch: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);
  const [inputQuery, setInputQuery] = useState(state.query);
  
  const lastElementRef = useRef(null);
  const hasReachedEndOfPage = useIsElementVisible(lastElementRef);

  const movies = useSearchMovies(hasReachedEndOfPage);

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
      <div ref={lastElementRef}></div>
    </section>
  );
};
