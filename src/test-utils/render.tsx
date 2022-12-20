import { render, RenderOptions } from "@testing-library/react";
import { ReactElement, JSXElementConstructor } from "react";
import { AppContext, initialAppContext } from "../context";
import { IAppContext } from "../models/app-context";

export const getProvidersWrapper =
  (
    contextData: IAppContext,
    dispatchMock: jest.Mock<any, any>
  ): JSXElementConstructor<{ children: ReactElement }> =>
  ({ children }) => {
    return (
      <AppContext.Provider
        value={{ state: contextData, dispatch: dispatchMock }}
      >
        {children}
      </AppContext.Provider>
    );
  };

const customRender = (
  ui: ReactElement,
  contextData: IAppContext = initialAppContext,
  dispatchMock = jest.fn(),
  options?: Omit<RenderOptions, "wrapper">
) => {
  const component = render(ui, {
    wrapper: getProvidersWrapper(contextData, dispatchMock),
    ...options,
  });

  return { component };
};

export * from "@testing-library/react";
export { customRender as render };
