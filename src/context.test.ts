import { contextReducer, initialAppContext } from "./context";
import { SectionKeys } from "./models/section-keys";

describe("contextReducer", () => {
  it("should return the updated context when SET_ACTIVE_SECTION is dispatched", () => {
    const newActiveSectionKey = SectionKeys.Favourites;

    const newState = contextReducer(initialAppContext, {
      type: "SET_ACTIVE_SECTION",
      payload: newActiveSectionKey,
    });

    expect(newState.activeSectionKey).toBe(newActiveSectionKey);
  });

  it("should return the updated context when SET_QUERY is dispatched", () => {
    const newQuery = "new-query";

    const newState = contextReducer(initialAppContext, {
      type: "SET_QUERY",
      payload: newQuery,
    });

    expect(newState.query).toBe(newQuery);
  })
});
