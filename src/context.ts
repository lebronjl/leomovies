import { createContext, Dispatch } from "react";
import { IAppContext } from "./models/app-context";
import { SectionKeys } from "./models/section-keys";

export const initialAppContext: IAppContext = {
  activeSectionKey: SectionKeys.Search,
};

export const AppContext = createContext<{
  state: IAppContext;
  dispatch: Dispatch<AppAction>;
}>({
  state: initialAppContext,
  dispatch: () => null,
});

type AppAction = {
  type: "SET_ACTIVE_SECTION";
  payload: SectionKeys;
};

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
    default:
      return state;
  }
};
