import { useGetMovies } from "../movies/useGetMovies";
import Spinner from "../ui/Spinner";
import MoviesRow from "../movies/MoviesRow";
import Table from "../ui/Table";
import { useState } from "react";

function Poster() {
  const { isLoading, movies } = useGetMovies();
  const [count, setCount] = useState(65);

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

      {count}
      <button onClick={() => setCount(count + 1)}>COUNT MORE</button>
    </>
  );
}

export default Poster;
