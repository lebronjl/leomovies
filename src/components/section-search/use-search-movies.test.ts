/* eslint-disable testing-library/no-unnecessary-act */
import { initialAppContext } from "../../context";
import { IMovie } from "../../models/movie";
import {
  IMovieResponse,
  ISearchMoviesResponse,
} from "../../models/search-movies-response";
import { act, renderHook, waitFor } from "../../test-utils/render";
import { useSearchMovies } from "./use-search-movies";

describe("useSearchMovies", () => {
  const response: ISearchMoviesResponse = {
    page: 1,
    results: [
      { id: 1, title: "Movie 1" },
      { id: 1, title: "Movie 1" },
      { id: 2, title: "Movie 2" },
    ] as IMovieResponse[],
    total_pages: 2,
    total_results: 2,
  };

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should not fetch the data if the query is empty", async () => {
    jest.spyOn(global, "fetch").mockImplementation();

    await act(async () => {
      renderHook(() => useSearchMovies(false));
    });

    expect(global.fetch).not.toBeCalled();
  });

  it("should fetch the data and return the mapped movies if a query exists", async () => {
    jest
      .spyOn(global, "fetch")
      .mockImplementation(
        jest.fn(() =>
          Promise.resolve({ json: () => Promise.resolve(response) })
        ) as jest.Mock
      );
    const expectedResult: IMovie[] = [
      { id: 1, title: "Movie 1" },
      { id: 2, title: "Movie 2" },
    ];

    const { result } = renderHook(() => useSearchMovies(false), {
      ...initialAppContext,
      query: "any-query",
    });

    expect(global.fetch).toBeCalled();
    await waitFor(() => {
      expect(result.current).toMatchObject(expectedResult);
    });
  });

  it("should fetch the second page if the end of the page is reached", async () => {
    const jsonMock1 = jest.fn(() =>
      Promise.resolve({ json: () => Promise.resolve(response) })
    ) as unknown as jest.Mock;
    const jsonMock2 = jest.fn(() =>
      Promise.resolve({ json: () => Promise.resolve({ ...response, page: 2 }) })
    ) as unknown as jest.Mock;

    jest
      .spyOn(global, "fetch")
      .mockImplementationOnce(jsonMock1)
      .mockImplementationOnce(jsonMock2);

    const { rerender } = renderHook(
      (hasReachedEndOfPage: boolean) => useSearchMovies(hasReachedEndOfPage),
      {
        ...initialAppContext,
        query: "any-query",
      },
      jest.fn(),
      {
        initialProps: false,
      }
    );

    rerender(true);
    await waitFor(() => {
      expect(global.fetch).toBeCalledTimes(2);
    });
  });
});
