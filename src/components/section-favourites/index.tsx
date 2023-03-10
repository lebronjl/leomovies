import React, { useContext } from "react";
import { AppContext } from "../../context";
import { MoviesList } from "../movies-list";

export const SectionFavourites: React.FC = () => {
  const { state } = useContext(AppContext);

  return (
    <section role="grid" data-testid="section-favourites">
      <MoviesList
        movies={state.favouriteMovies}
        emptyListMessage="The list is empty. There are a lot of lovely movies, just add them from any movies list!"
      />
    </section>
  );
};
