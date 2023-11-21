import { useQuery } from "@tanstack/react-query";
import { getMovie } from "../services/apiMovies";

export function useGetMovies() {
  const { isLoading, data: movies } = useQuery({
    queryKey: ["movie"],
    queryFn: () => getMovie(),
    retry: false,
  });
  return { isLoading, movies };
}
