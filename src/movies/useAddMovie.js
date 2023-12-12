import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addMovie } from "../services/apiMovies";
import toast from "react-hot-toast";

export function useAddMovie() {
  const queryClient = useQueryClient();

  const { mutate: addCustomMovie, isLoading } = useMutation({
    mutationFn: addMovie,
    onSuccess: () => {
      toast.success("Movie successfully added");
      queryClient.invalidateQueries({
        queryKey: ["movie"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  // const { isLoading, data: addCustomMovie } = useQuery({
  //   queryKey: ["movieToAdd"],
  //   queryFn: () =>
  //     addMovie(name, year, country, time, created_by, genre, poster), /////////////////////////
  //   retry: false,
  // });

  return { isLoading, addCustomMovie };
}

// name,
// year,
// country,
// time,
// created_by,
// genre,
// poster

//   const { isLoading, data: movieToAdd } = useQuery({
//     queryKey: ["movieToAdd"],
//     queryFn: () =>
//       addMovie(name, year, country, time, created_by, genre, poster), /////////////////////////
//     retry: false,
//   });
//   return { isLoading, movieToAdd };
