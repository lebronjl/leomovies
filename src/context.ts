import { createContext, Dispatch } from "react";
import { IAppContext } from "./models/app-context";
import { IMovie } from "./models/movie";
import { SectionKeys } from "./models/section-keys";

export const initialAppContext: IAppContext = {
  activeSectionKey: SectionKeys.Search,
  query: "",
  favouriteMovies: [],
  watchLaterMovies: [],
};

export const AppContext = createContext<{
  state: IAppContext;
  dispatch: Dispatch<AppAction>;
}>({
  state: initialAppContext,
  dispatch: () => null,
});

type AppAction =
  | {
      type: "SET_ACTIVE_SECTION";
      payload: SectionKeys;
    }
  | { type: "SET_QUERY"; payload: string }
  | { type: "TOGGLE_FAVOURITE"; payload: IMovie }
  | { type: "TOGGLE_WATCH_LATER"; payload: IMovie };

export const contextReducer = (
  state: IAppContext,
  action: AppAction
): IAppContext => {
  switch (action.type) {
    case "SET_ACTIVE_SECTION": {
      return {
        ...state,
        activeSectionKey: action.payload,
      };
    }
    case "SET_QUERY": {
      return {
        ...state,
        query: action.payload,
      };
    }
    case "TOGGLE_FAVOURITE": {
      return {
        ...state,
        favouriteMovies: toggleMovieFromList(
          state.favouriteMovies,
          action.payload
        ),
      };
    }
    case "TOGGLE_WATCH_LATER": {
      return {
        ...state,
        watchLaterMovies: toggleMovieFromList(
          state.watchLaterMovies,
          action.payload
        ),
      };
    }
    default:
      return state;
  }
};

const toggleMovieFromList = (list: IMovie[], movie: IMovie): IMovie[] => {
  return list.some((i) => i.id === movie.id)
    ? list.filter((i) => i.id !== movie.id)
    : [...list, movie];
};