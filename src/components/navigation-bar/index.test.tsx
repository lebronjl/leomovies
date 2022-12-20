import { render, screen } from "../../test-utils/render";
import userEvent from "@testing-library/user-event";
import React from "react";
import { NavigationBar } from ".";
import { SectionKeys } from "../../models/section-keys";
import { initialAppContext } from "../../context";

describe("NavigationBar", () => {
  const useCases: [SectionKeys, string][] = [
    [SectionKeys.Search, "Search"],
    [SectionKeys.Favourites, "Favourites"],
    [SectionKeys.WatchLater, "Watch later"],
  ];

  it("should render the 3 tab options", () => {
    render(<NavigationBar />);

    expect(screen.getAllByRole("tab").length).toBe(3);
  });

  it.each(useCases)(
    "should render the tab option as selected when the active key is %s",
    (activeSectionKey: SectionKeys, selectedExpectedText: string) => {
      render(<NavigationBar />, { ...initialAppContext, activeSectionKey });

      expect(screen.getByRole("tab", { selected: true })).toHaveTextContent(
        selectedExpectedText
      );
    }
  );

  it.each(useCases)(
    "should call the section change event when the %s key option is clicked",
    async (sectionKey: SectionKeys, optionText: string) => {
      const user = userEvent.setup();
      const dispatchMock = jest.fn();

      render(<NavigationBar />, initialAppContext, dispatchMock);

      await user.click(screen.getByText(optionText));
      expect(dispatchMock).toBeCalledWith({
        type: "SET_ACTIVE_SECTION",
        payload: sectionKey,
      });
    }
  );
});
