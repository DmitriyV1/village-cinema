import styled from "styled-components";

const RowUnit = styled.div`
  font-size: 2.25rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
  border-bottom: solid 1px var(--color-grey-400);
`;

const Img = styled.img`
  /* aspect-ratio: 3 / 2; */
  object-fit: cover;
  object-position: center;
  width: 25vh;
  padding-bottom: 1.6rem;
`;

function AddMovieRow() {
  return <div>Movie n1</div>;
}

export default AddMovieRow;
