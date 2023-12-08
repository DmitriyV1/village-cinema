import styled from "styled-components";
import Row from "./Row";
import { HiDocumentPlus } from "react-icons/hi2";

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

  const handleClick = function (e) {
    e.preventDefault();
  };

  poster ? console.log(Object.values(poster)[0]) : "";
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
          <StyledButton onClick={handleClick}>
            <HiDocumentPlus />
          </StyledButton>
        </Row>
      </Wrapper>
    </>
  );
}

export default AddMovieRow;
