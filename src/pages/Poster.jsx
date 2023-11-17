import { useGetMovies } from "../movies/useGetMovies";
import Spinner from "../ui/Spinner";
import MoviesRow from "../movies/MoviesRow";
import Table from "../ui/Table";

function Poster() {
  const { isLoading, movies } = useGetMovies();

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <Table.Body
          data={movies}
          render={(mov) => <MoviesRow movie={mov} key={mov.id} />}
        />
      )}
    </>
  );
}

export default Poster;
