import { render, screen } from "../../test-utils/render";
import React from "react";
import { SectionSearch } from ".";
import * as customHook from "./use-search-movies";
import { IMovie } from "../../models/movie";

describe("SectionSearch", () => {
  it("renders the section", () => {
    render(<SectionSearch />);

    expect(screen.getByRole("grid")).toBeInTheDocument();
    expect(screen.getByRole("grid")).toHaveTextContent("Search");
  });

  it("renders the movies in a list when the search hook returns items", () => {
    const movies: IMovie[] = [
      {
        id: 1,
        title: "Movie1",
      },
      { id: 2, title: "Movie2" },
    ];
    jest.spyOn(customHook, "useSearchMovies").mockReturnValue(movies);

    render(<SectionSearch />);

    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBe(2);
    expect(listItems[0]).toHaveTextContent(movies[0].title);
    expect(listItems[1]).toHaveTextContent(movies[1].title);
  });
});
