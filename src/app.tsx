import React, { useReducer } from "react";
import { NavigationBar } from "./components/navigation-bar";
import { SectionsSwitch } from "./components/sections-switch";
import { AppContext, contextReducer, initialAppContext } from "./context";

export const App: React.FC = () => {
  const [state, dispatch] = useReducer(contextReducer, initialAppContext);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <NavigationBar />
      <SectionsSwitch />
    </AppContext.Provider>
  );
};
