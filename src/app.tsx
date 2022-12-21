import React, { useReducer } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { NavigationBar } from "./components/navigation-bar";
import { SectionsSwitch } from "./components/sections-switch";
import { AppContext, contextReducer, initialAppContext } from "./context";

export const App: React.FC = () => {
  const [state, dispatch] = useReducer(contextReducer, initialAppContext);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <QueryClientProvider client={new QueryClient()}>
        <NavigationBar />
        <SectionsSwitch />
      </QueryClientProvider>
    </AppContext.Provider>
  );
};
