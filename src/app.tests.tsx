import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { App } from "./app";

describe("App", () => {
  it("should render the search section by default", () => {
    render(<App />);

    expect(screen.getByRole("tab", { selected: true })).toHaveTextContent(
      "Search"
    );
    expect(screen.getByRole("grid")).toHaveTextContent("Search");
  });

  it("should render each of the sections when clicked", async () => {
    const user = userEvent.setup();

    render(<App />);

    user.click(screen.getAllByRole("tab")[1]);
    expect(screen.getByRole("tab", { selected: true })).toHaveTextContent(
      "Favourites"
    );
    expect(screen.getByRole("grid")).toHaveTextContent("Favourites");

    user.click(screen.getAllByRole("tab")[1]);
    expect(screen.getByRole("tab", { selected: true })).toHaveTextContent(
      "Watch later"
    );
    expect(screen.getByRole("grid")).toHaveTextContent("Watch later");

    user.click(screen.getAllByRole("tab")[1]);
    expect(screen.getByRole("tab", { selected: true })).toHaveTextContent(
      "Search"
    );
    expect(screen.getByRole("grid")).toHaveTextContent("Search");
  });
});
