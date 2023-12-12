import styled from "styled-components";
import Row from "../ui/Row";
import getCurrentDate from "../helpers/getCurrentDate";
import Button from "../ui/Button";

const RowUnit = styled.span`
  font-size: 2.25rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
  border-bottom: solid 1px var(--color-grey-400);
  max-width: 70vh;
`;

const AuthorText = styled.span`
  font-size: 1.25rem;
  font-weight: 400;
  color: var(--color-grey-400);
  font-family: "Sono";
  position: absolute;

  right: -1rem;
`;

const Img = styled.img`
  object-fit: cover;
  object-position: center;
  width: 25vh;
  padding-bottom: 1.6rem;
  padding-top: 1.6rem;
  margin-right: 10vh;
`;

const Wrapper = styled.div`
  border-bottom: solid 1px var(--color-grey-500);
  padding-bottom: 1.2rem;
  position: relative;
`;

const StyledParametrs = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 3rem;
  &:not(:last-child) {
    border-right: solid;
  }
  gap: 1.2rem;
`;

function OrderMoviesRow({ movie }) {
  const { name, poster, created_by } = movie;
  const x = new Date();
  console.log(x.getHours() > 12);

  return (
    <Wrapper>
      <AuthorText>Added by {created_by}</AuthorText>
      <Row type="horizontal" space="gap">
        <Img src={poster} />

        <Row type="vertical">
          <RowUnit>{name}</RowUnit>
          <Row type="horizontal">
            <StyledParametrs>
              {getCurrentDate()}
              <Button
                variation={x > 12 ? "danger" : "primary"}
                disabled={x > 12 ? true : false}
              >
                12:00
              </Button>
              <Button>15:00</Button>
              <Button>18:00</Button>
            </StyledParametrs>

            <StyledParametrs>
              {getCurrentDate(1)}
              <Button>12:00</Button>
              <Button>15:00</Button>
              <Button>18:00</Button>
            </StyledParametrs>

            <StyledParametrs>
              {getCurrentDate(2)}
              <Button>12:00</Button>
              <Button>15:00</Button>
              <Button>18:00</Button>
            </StyledParametrs>
          </Row>
        </Row>
      </Row>
    </Wrapper>
  );
}

export default OrderMoviesRow;
