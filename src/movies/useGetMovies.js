import { useQuery } from "@tanstack/react-query";
import { getMovies as getMoviesApi } from "./apiMovies";

export function useGetMovies() {
  const { isLoading, data: movies } = useQuery({
    queryKey: ["movie"],
    queryFn: () => getMoviesApi(),
    retry: false,
  });
  return { isLoading, movies };
}
