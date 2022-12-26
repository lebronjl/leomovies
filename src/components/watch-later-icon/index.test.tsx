import userEvent from "@testing-library/user-event";
import React from "react";
import { WatchLaterIcon } from ".";
import { render, screen } from "../../test-utils/render";

describe("WatchLaterIcon", () => {
  it("should trigger the onClicked property event when clicked", async () => {
    const user = userEvent.setup();
    const onClickMock = jest.fn();

    render(<WatchLaterIcon color="tomato" onClick={onClickMock} />);

    await user.click(screen.getByRole("button"));

    expect(onClickMock).toBeCalled();
  });

  it("have an img role if the onClick property is not defined", () => {
    render(<WatchLaterIcon color="tomato" />);

    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
