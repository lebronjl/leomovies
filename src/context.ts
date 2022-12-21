import { createContext, Dispatch } from "react";
import { IAppContext } from "./models/app-context";
import { SectionKeys } from "./models/section-keys";

export const initialAppContext: IAppContext = {
  activeSectionKey: SectionKeys.Search,
  query: "",
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
  | { type: "SET_QUERY"; payload: string };

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
    default:
      return state;
  }
};
