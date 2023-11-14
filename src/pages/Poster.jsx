import { getMovies } from "../movies/apiMovies";
import { useGetMovies } from "../movies/useGetMovies";
import Spinner from "../ui/Spinner";

function Poster() {
  const handleShowMovies = function () {
    // console.log(getMovies());
  };

  const { isLoading, movies } = useGetMovies();

  if (isLoading) return;
  movies.map((movie) => {
    console.log(movie);
  });

  return (
    <>
      <div>Poster</div>
      <span>
        <button onClick={() => console.log(movies)}>Get movies</button>
        <button onClick={handleShowMovies}>Show movies</button>
      </span>
      {isLoading ? <Spinner /> : <div>zagruzil</div>}
    </>
  );
}

export default Poster;
