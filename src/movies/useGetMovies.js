import { useQuery } from "@tanstack/react-query";
import { getMovies as getMoviesApi } from "./apiMoviesKinopoisk";
import { getMovie } from "../services/apiMovies";

// export function useGetMovies() {
//   const { isLoading, data: movies } = useQuery({
//     queryKey: ["movie"],
//     queryFn: () => getMoviesApi(), /////////////////////////
//     retry: false,
//   });
//   return { isLoading, movies };
// }
export function useGetMovies() {
  const { isLoading, data: movies } = useQuery({
    queryKey: ["movie"],
    queryFn: () => getMovie(),
    retry: false,
  });
  return { isLoading, movies };
}
