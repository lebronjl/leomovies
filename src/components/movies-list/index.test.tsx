import React from "react";
import { MoviesList } from ".";
import { IMovie } from "../../models/movie";
import { render, screen } from "../../test-utils/render";

describe("MoviesList", () => {
  it("should render an empty list if the movies list is undefined", () => {
    render(<MoviesList movies={undefined} />);

    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.queryByRole("listitem")).not.toBeInTheDocument();
  });

  it("should render an list with a list item per movie", () => {
    const movies: IMovie[] = [
      { id: 1, title: "Movie1", posterPath: "Movie1Poster" },
      { id: 2, title: "Movie2", posterPath: "Movie2Poster" },
    ];

    render(<MoviesList movies={movies} />);

    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.queryAllByRole("listitem").length).toBe(movies.length);
  });
});
