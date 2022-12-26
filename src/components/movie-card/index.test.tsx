import React from "react";
import { MovieCard } from ".";
import { IMovie } from "../../models/movie";
import { TmdbConstants } from "../../models/tmdb-constants";
import { render, screen } from "../../test-utils/render";

describe("MovieCard", () => {
  it("renders the poster if it exists for the movie", () => {
    const movie: IMovie = {
      id: 1,
      title: "Movie1",
      posterPath: "MoviePosterPath.png",
    };

    render(<MovieCard movie={movie} />);

    expect(screen.getByRole("img")).toHaveProperty(
      "src",
      `${TmdbConstants.imagesUrlPrefix}${movie.posterPath}`
    );
  });

  it("renders the no poster available placeholder if there is no poster for the movie", () => {
    const movie: IMovie = {
      id: 1,
      title: "Movie1",
      posterPath: undefined,
    };

    render(<MovieCard movie={movie} />);

    expect(screen.getByRole("img")).toHaveTextContent("No poster available");
  });

  it("renders the movie title", () => {
    const movie: IMovie = {
      id: 1,
      title: "Movie1",
      posterPath: undefined,
    };

    render(<MovieCard movie={movie} />);

    expect(screen.getByRole("listitem")).toHaveTextContent(movie.title);
  });
});
