import { render, screen } from "../../test-utils/render";
import React from "react";
import { SectionsSwitch } from ".";
import { SectionKeys } from "../../models/section-keys";
import { initialAppContext } from "../../context";

describe("SectionsSwitch", () => {
  it.each([
    [SectionKeys.Search, "section-search"],
    [SectionKeys.Favourites, "section-favourites"],
    [SectionKeys.WatchLater, "section-watchlater"],
  ])(
    "should render the appropiate section when activeSectionKey is %s",
    (activeSectionKey: SectionKeys, dataTestId: string) => {
      render(<SectionsSwitch />, { ...initialAppContext, activeSectionKey });

      expect(screen.getByTestId(dataTestId)).toBeInTheDocument();
    }
  );
});
