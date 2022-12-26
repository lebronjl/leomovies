import React from "react";
import { MoviesList } from ".";
import { IMovie } from "../../models/movie";
import { render, screen } from "../../test-utils/render";

describe("MoviesList", () => {
  it("should render a list with a list item per movie", () => {
    const movies: IMovie[] = [
      { id: 1, title: "Movie1", posterPath: "Movie1Poster" },
      { id: 2, title: "Movie2", posterPath: "Movie2Poster" },
    ];

    render(<MoviesList movies={movies} />);

    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.queryAllByRole("listitem").length).toBe(movies.length);
  });

  it("should render the no data message if the movies list is undefined", () => {
    const noDataMessage = "no-data-message";

    render(<MoviesList movies={undefined} noDataMessage={noDataMessage} />);

    expect(screen.queryByRole("list")).not.toBeInTheDocument();
    expect(screen.queryByRole("listitem")).not.toBeInTheDocument();
    expect(screen.getByRole("note")).toHaveTextContent(noDataMessage);
  });

  it("should render the empty list message if the movies list is empty", () => {
    const emptyListMessage = "empty-list-message";

    render(<MoviesList movies={[]} emptyListMessage={emptyListMessage} />);

    expect(screen.queryByRole("list")).not.toBeInTheDocument();
    expect(screen.queryByRole("listitem")).not.toBeInTheDocument();
    expect(screen.getByRole("note")).toHaveTextContent(emptyListMessage);
  });
});
