import { useContext } from "react";
import { QueryFunction, QueryKey, useQuery } from "react-query";
import { AppContext } from "../../context";
import { IMovie } from "../../models/movie";
import { ISearchMoviesResponse } from "../../models/search-movies-response";

const DOMAIN = "https://api.themoviedb.org";
const GET_QUERY_MOVIES_URL = `${DOMAIN}/3/search/movie`;

export const useSearchMovies = () => {
  const { state } = useContext(AppContext);

  const fetchMovies: QueryFunction<IMovie[], QueryKey> = async ({
    pageParam = 1,
    queryKey,
  }): Promise<IMovie[]> => {
    const query = queryKey[1] as string;
    const url = new URL(GET_QUERY_MOVIES_URL);
    url.searchParams.append("page", pageParam);
    url.searchParams.append("query", query);
    url.searchParams.append("api_key", process.env.REACT_APP_API_KEY as string);
    const response = await fetch(url);
    const data: ISearchMoviesResponse = await response.json();
    return data.results.map((r) => ({
      id: r.id,
      title: r.title,
      posterPath: r.poster_path,
    }));
  };

  const { data } = useQuery<IMovie[]>(["movies", state.query], fetchMovies, {
    enabled: state.query.length > 0,
    staleTime: Infinity,
  });

  return data;
};
