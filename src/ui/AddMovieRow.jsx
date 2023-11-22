import styled from "styled-components";
import Row from "./Row";

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
`;

const StyledDiv = styled.div`
  /* display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between; */
`;

function AddMovieRow({ movie }) {
  const { id, country, name, poster, year } = movie;

  poster ? console.log(Object.values(poster)[0]) : "";
  return (
    <>
      <Wrapper>
        <Row type="horizontal">
          <Img src={poster ? Object.values(poster)[0] : ""} />
          <RowUnit>{name}</RowUnit>
          <RowUnit>{year}</RowUnit>
        </Row>
      </Wrapper>
    </>
  );
}

export default AddMovieRow;
