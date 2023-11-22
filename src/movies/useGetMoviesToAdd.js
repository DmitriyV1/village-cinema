import { useQuery } from "@tanstack/react-query";
import { getMovieKinopoisk } from "./apiMoviesKinopoisk";

export function useGetMoviesToAdd(name) {
  const {
    isLoading,
    data: movies,
    refetch,
  } = useQuery({
    queryKey: ["moviesByName"],
    queryFn: () => getMovieKinopoisk(name), /////////////////////////
    retry: false,
  });
  return { isLoading, movies, refetch };
}
