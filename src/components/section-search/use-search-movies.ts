import { useContext, useEffect, useState } from "react";
import { QueryFunction, QueryKey, useInfiniteQuery } from "react-query";
import { AppContext } from "../../context";
import { IMovie } from "../../models/movie";
import { IMoviesPage } from "../../models/movies-page";
import { ISearchMoviesResponse } from "../../models/search-movies-response";

const DOMAIN = "https://api.themoviedb.org";
const GET_QUERY_MOVIES_URL = `${DOMAIN}/3/search/movie`;

export const useSearchMovies = (hasReachedEndOfPage: boolean) => {
  const { state } = useContext(AppContext);
  const [movies, setMovies] = useState<IMovie[]>();

  const fetchMovies: QueryFunction<IMoviesPage, QueryKey> = async ({
    pageParam = 1,
    queryKey,
  }): Promise<IMoviesPage> => {
    const query = queryKey[1] as string;
    const url = new URL(GET_QUERY_MOVIES_URL);
    url.searchParams.append("page", pageParam);
    url.searchParams.append("query", query);
    url.searchParams.append("api_key", process.env.REACT_APP_API_KEY as string);
    const response = await fetch(url);
    const data: ISearchMoviesResponse = await response.json();
    return {
      page: data.page,
      movies: data.results.map((r) => ({
        id: r.id,
        title: r.title,
      })),
      totalPages: data.total_pages,
      totalResults: data.total_results,
    };
  };

  const { data, fetchNextPage, hasNextPage, isFetching } =
    useInfiniteQuery<IMoviesPage>(["movies", state.query], fetchMovies, {
      getNextPageParam: (lastPage) => {
        if (lastPage.page < lastPage.totalPages) {
          return lastPage.page + 1;
        }
      },
      enabled: state.query.length > 0,
      staleTime: Infinity,
    });

  useEffect(() => {
    if (!isFetching && hasReachedEndOfPage && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, hasReachedEndOfPage, isFetching]);

  useEffect(() => {
    const newMovies = data?.pages
      .map((p) => p.movies)
      .reduce((a, b) => [...a, ...b], [])
      .filter(
        (item, index, list) => list.findIndex((i) => i.id === item.id) === index
      );
    setMovies(newMovies);
  }, [data]);

  return movies;
};
