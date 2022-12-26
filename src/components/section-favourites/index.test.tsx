import { render, screen } from "../../test-utils/render";
import React from "react";
import { SectionFavourites } from ".";
import { initialAppContext } from "../../context";

describe("SectionFavourites", () => {
  it("renders the section", () => {
    render(<SectionFavourites />, {
      ...initialAppContext,
      favouriteMovies: [
        { id: 1, title: "Movie1" },
        { id: 2, title: "Movie2" },
      ],
    });

    expect(screen.getByRole("grid")).toBeInTheDocument();
    expect(screen.getAllByRole("listitem").length).toBe(2);
  });
});
