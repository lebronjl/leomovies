import React, { useContext } from "react";
import { AppContext } from "../../context";
import { MoviesList } from "../movies-list";

export const SectionWatchLater: React.FC = () => {
  const { state } = useContext(AppContext);

  return (
    <section role="grid" data-testid="section-watchlater">
      <MoviesList movies={state.watchLaterMovies} />
    </section>
  );
};
