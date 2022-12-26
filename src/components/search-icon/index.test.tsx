import React from "react";
import { SearchIcon } from ".";
import { render, screen } from "../../test-utils/render";

describe("SearchIcon", () => {
  it("have render the icon", () => {
    render(<SearchIcon color="tomato" />);

    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
