import styled from "styled-components";
import Row from "./Row";
import { HiDocumentPlus } from "react-icons/hi2";
import { useAddMovie } from "../movies/useAddMovie";
import { useQuery } from "@tanstack/react-query";

const RowUnit = styled.div`
  font-size: 2.25rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
  /* border-bottom: solid 1px var(--color-grey-400); */
`;

const Img = styled.img`
  /* aspect-ratio: 3 / 2; */
  object-fit: cover;
  object-position: center;
  width: 10vh;
  padding-bottom: 1.6rem;
`;

const Wrapper = styled.div`
  border-bottom: solid 1px var(--color-grey-500);
  margin-bottom: 1.8rem;
  position: relative;
`;

const StyledButton = styled.button`
  size: 3rem;
  position: absolute;
  top: 1.2rem;
  right: 1rem;
  &:focus {
    outline: 0;
  }
`;

function AddMovieRow({ movie }) {
  const { id, country, name, poster, year } = movie;
  const user = useQuery({ queryKey: ["user"] });
  const { isLoading, addCustomMovie } = useAddMovie();
  const movieGenres = [];
  const movieCountries = [];

  const handleClick = function (e) {
    e.preventDefault();

    for (let i of movie.genres.values()) {
      movieGenres.push(i.name);
    }

    for (let i of movie.countries.values()) {
      movieCountries.push(i.name);
    }

    addCustomMovie({
      name: movie.name,
      year: movie.year,
      country: movieCountries.toString().replaceAll(",", ", "),
      time: movie.movieLength,
      created_by: user.data.email || "nobody",
      genre: movieGenres.toString().replaceAll(",", ", "),
      poster: movie.poster.url,
    });
  };

  return (
    <>
      <Wrapper>
        <Row type="horizontal">
          <Img
            src={
              Object.values(poster)[0] != null
                ? Object.values(poster)[0]
                : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
            }
          />
          <RowUnit>{name}</RowUnit>
          <RowUnit>{year}</RowUnit>
        </Row>
        <StyledButton onClick={handleClick}>
          <HiDocumentPlus />
        </StyledButton>
      </Wrapper>
    </>
  );
}

export default AddMovieRow;
