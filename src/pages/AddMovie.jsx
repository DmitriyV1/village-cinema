import { useSearchParams } from "react-router-dom";
import AddMovieRow from "../ui/AddMovieRow";
import SearchBar from "../ui/SearchBar";
import { useGetMoviesToAdd } from "../movies/useGetMoviesToAdd";
import { useEffect, useState } from "react";

function AddMovie() {
  const [searchParams, setSearchParams] = useSearchParams();

  // const movieParams = searchParams.get("movie") || "";
  const [namedMovies, setNamedMovies] = useState("");

  useEffect(
    function () {
      setNamedMovies(searchParams.get("movie"));
    },
    [searchParams, namedMovies]
  );
  searchParams.get("movie");

  const { isLoading, movies } = useGetMoviesToAdd(namedMovies);

  const handleClick = function () {
    isLoading ? console.log("Ждем") : console.log(movies);
    console.log(namedMovies);
  };

  return (
    <>
      <SearchBar />

      {/* <Table.Body> */}
      <AddMovieRow />
      {/* </Table.Body> */}
      <span>
        <button onClick={handleClick}>Показать</button>
      </span>
    </>
  );
}

export default AddMovie;
