import { MutableRefObject } from "react";
import { renderHook, waitFor } from "../../test-utils/render";
import { useIsElementVisible } from "./use-is-element-visible";

describe("useIsElementVisible", () => {
  it("should observe the ref when mounted and disconnect when unmounted", async () => {
    const observeMock = jest.fn();
    const disconnectMock = jest.fn();
    const intersectionObserverMock = () => ({
      observe: observeMock,
      disconnect: disconnectMock,
    });
    window.IntersectionObserver = jest
      .fn()
      .mockImplementation(intersectionObserverMock);
    const ref = {
      current: "test",
    } as unknown as MutableRefObject<null>;

    const { unmount } = renderHook(() => useIsElementVisible(ref));

    await waitFor(() => {
      expect(observeMock).toBeCalledWith("test");
    });

    unmount();

    expect(disconnectMock).toBeCalled();
  });
});
