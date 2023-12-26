import { useSearchParams } from "react-router-dom";
import AddMovieRow from "../ui/AddMovieRow";
import SearchBar from "../ui/SearchBar";
import { useGetMoviesToAdd } from "../movies/useGetMoviesToAdd";
import { useEffect } from "react";
import Table from "../ui/Table";
import Spinner from "../ui/Spinner";

function AddMovie() {
  const [searchParams] = useSearchParams();

  const movieParams = searchParams.get("movie") || ".";
  const { isLoading, movies, refetch } = useGetMoviesToAdd(movieParams);

  useEffect(() => {
    refetch();
  }, [movieParams, refetch]);

  return (
    <>
      <SearchBar />
      {isLoading ? (
        <Spinner />
      ) : (
        (isLoading && <Spinner />) || (
          <Table.Body
            data={movieParams.length < 3 ? [] : movies}
            render={(mov) => <AddMovieRow movie={mov} key={mov.id} />}
          />
        )
      )}
    </>
  );
}

export default AddMovie;
