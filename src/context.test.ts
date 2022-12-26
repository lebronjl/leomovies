import { contextReducer, initialAppContext } from "./context";
import { IMovie } from "./models/movie";
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
  });

  it("should add a movie to favourites when the movie is not in the favourites state and TOGGLE_FAVOURITE is dispatched", () => {
    const movie: IMovie = { id: 1, title: "Movie1" };

    const newState = contextReducer(initialAppContext, {
      type: "TOGGLE_FAVOURITE",
      payload: movie,
    });

    expect(newState.favouriteMovies.length).toBe(1);
    expect(newState.favouriteMovies[0]).toMatchObject(movie);
  });

  it("should remove a movie from favourites when the movie is in the favourites state and TOGGLE_FAVOURITE is dispatched", () => {
    const movie: IMovie = { id: 1, title: "Movie1" };

    const newState = contextReducer(
      { ...initialAppContext, favouriteMovies: [movie] },
      {
        type: "TOGGLE_FAVOURITE",
        payload: movie,
      }
    );

    expect(newState.favouriteMovies.length).toBe(0);
  });

  it("should add a movie to watch later when the movie is not in the watch later state and TOGGLE_WATCH_LATER is dispatched", () => {
    const movie: IMovie = { id: 1, title: "Movie1" };

    const newState = contextReducer(initialAppContext, {
      type: "TOGGLE_WATCH_LATER",
      payload: movie,
    });

    expect(newState.watchLaterMovies.length).toBe(1);
    expect(newState.watchLaterMovies[0]).toMatchObject(movie);
  });

  it("should remove a movie from watch later when the movie is in the watch later state and TOGGLE_WATCH_LATER is dispatched", () => {
    const movie: IMovie = { id: 1, title: "Movie1" };

    const newState = contextReducer(
      { ...initialAppContext, watchLaterMovies: [movie] },
      {
        type: "TOGGLE_WATCH_LATER",
        payload: movie,
      }
    );

    expect(newState.watchLaterMovies.length).toBe(0);
  });
});
