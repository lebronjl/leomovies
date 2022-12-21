import { render, screen } from "../../test-utils/render";
import React from "react";
import { SectionSearch } from ".";
import * as useSearchMoviesHook from "./use-search-movies";
import * as useIsElementVisibleHook from "./use-is-element-visible";
import { IMovie } from "../../models/movie";
import userEvent from "@testing-library/user-event";
import { initialAppContext } from "../../context";

describe("SectionSearch", () => {
  beforeEach(() => {
    jest
      .spyOn(useIsElementVisibleHook, "useIsElementVisible")
      .mockReturnValue(false);
  });

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
    jest.spyOn(useSearchMoviesHook, "useSearchMovies").mockReturnValue(movies);

    render(<SectionSearch />);

    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBe(2);
    expect(listItems[0]).toHaveTextContent(movies[0].title);
    expect(listItems[1]).toHaveTextContent(movies[1].title);
  });

  it("dispatches the SET_QUERY action when the search form is submitted", async () => {
    const user = userEvent.setup();
    jest.spyOn(global, "fetch").mockImplementation();
    const dispatchMock = jest.fn();

    render(<SectionSearch />, initialAppContext, dispatchMock);

    await user.type(screen.getByRole("search"), "test-query");
    await user.click(screen.getByRole("button"));

    expect(dispatchMock).toBeCalledWith({
      type: "SET_QUERY",
      payload: "test-query",
    });
  });
});
