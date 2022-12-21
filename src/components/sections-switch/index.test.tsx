import { render, screen } from "../../test-utils/render";
import React from "react";
import { SectionsSwitch } from ".";
import { SectionKeys } from "../../models/section-keys";
import { initialAppContext } from "../../context";

describe("SectionsSwitch", () => {
  it.each([
    [SectionKeys.Search, "Search"],
    [SectionKeys.Favourites, "Favourites"],
    [SectionKeys.WatchLater, "Watch later"],
  ])(
    "should render the appropiate section when activeSectionKey is %s",
    (activeSectionKey: SectionKeys, text: string) => {      
      render(<SectionsSwitch />, { ...initialAppContext, activeSectionKey });

      expect(screen.getByRole("grid")).toHaveTextContent(text);
    }
  );
});
