import styled from "styled-components";
import Row from "../ui/Row";
import minToHr from "../services/timeConverter";

const RowUnit = styled.div`
  font-size: 2.25rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
  border-bottom: solid 1px var(--color-grey-400);
  max-width: 70vh;
`;

const Img = styled.img`
  /* aspect-ratio: 3 / 2; */
  object-fit: cover;
  object-position: center;
  width: 25vh;
  padding-bottom: 1.6rem;
`;

const Wrapper = styled.div`
  border-bottom: solid 1px var(--color-grey-500);
  margin-bottom: 1.8rem;
`;

function MoviesRow({ movie }) {
  const { id, country, genre: genres, name, time, year, poster } = movie;
  console.log(movie);
  return (
    <>
      <Wrapper>
        <Row type="horizontal" space="gap">
          <Img src={poster} />

          <Row type="vertical">
            <RowUnit>Название: {name}</RowUnit>
            <RowUnit>Продолжительность: {minToHr(+time)}</RowUnit>
            <RowUnit>Год выхода: {year}</RowUnit>
            <RowUnit>
              {country.includes(",") ? "Страны:" : "Страна: "} {country}
            </RowUnit>
            <RowUnit>Жанр: {genres}</RowUnit>
          </Row>
        </Row>
      </Wrapper>
    </>
  );
}

export default MoviesRow;
