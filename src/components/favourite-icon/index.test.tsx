import userEvent from "@testing-library/user-event";
import React from "react";
import { FavouriteIcon } from ".";
import { render, screen } from "../../test-utils/render";

describe("FavouriteIcon", () => {
  it("should trigger the onClicked property event when clicked", async () => {
    const user = userEvent.setup();
    const onClickMock = jest.fn();

    render(<FavouriteIcon color="tomato" onClick={onClickMock} />);

    await user.click(screen.getByRole("button"));

    expect(onClickMock).toBeCalled();
  });

  it("have an img role if the onClick property is not defined", () => {
    render(<FavouriteIcon color="tomato" />);

    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
