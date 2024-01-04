import { useGetMovies } from "../movies/useGetMovies";
import Table from "../ui/Table";
import OrderMoviesRow from "../movies/OrderMoviesRow ";

function Schedule() {
  // const user = useQuery({ queryKey: ["user"] });
  const { isLoading, movies } = useGetMovies();

  return (
    <Table.Body
      data={movies}
      render={(mov) => <OrderMoviesRow movie={mov} key={mov.id} />}
    />
  );
}

export default Schedule;
