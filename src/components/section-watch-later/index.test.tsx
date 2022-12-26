import { render, screen } from "../../test-utils/render";
import React from "react";
import { SectionWatchLater } from ".";
import { initialAppContext } from "../../context";

describe("SectionWatchLater", () => {
  it("renders the section", () => {
    render(<SectionWatchLater />, {
      ...initialAppContext,
      watchLaterMovies: [
        { id: 1, title: "Movie1" },
        { id: 2, title: "Movie2" },
      ],
    });

    expect(screen.getByRole("grid")).toBeInTheDocument();
    expect(screen.getAllByRole("listitem").length).toBe(2);
  });
});
