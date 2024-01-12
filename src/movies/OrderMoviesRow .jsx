import styled from "styled-components";
import Row from "../ui/Row";
import getCurrentDate from "../helpers/getCurrentDate";
import ModalButton from "../ui/ModalButton";

const RowUnit = styled.span`
  font-size: 2rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
  border-bottom: solid 1px var(--color-grey-400);
  max-width: 70vh;
  /* padding-top: 1rem; */
  /* margin-top: 1rem; */
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
  padding-top: 1rem;
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
  const hours = x.getHours();

  return (
    <Wrapper>
      <AuthorText>Added by {created_by}</AuthorText>
      <Row type="horizontal" space="gap">
        <Img src={poster} />

        <Row type="vertical">
          <RowUnit>{name}</RowUnit>
          <Row type="horizontal">
            <StyledParametrs>
              <RowUnit>{getCurrentDate()}</RowUnit>

              <ModalButton
                time="12:00"
                disabledRule={hours >= 12 ? true : false}
                variationRule={hours >= 12 ? "danger" : "primary"}
                date={getCurrentDate()}
                name={name}
                customer={created_by}
              />

              <ModalButton
                time="15:00"
                disabledRule={hours >= 15 ? true : false}
                variationRule={hours >= 15 ? "danger" : "primary"}
                date={getCurrentDate()}
                name={name}
                customer={created_by}
              />
              <ModalButton
                time="18:00"
                disabledRule={hours >= 18 ? true : false}
                variationRule={hours >= 18 ? "danger" : "primary"}
                date={getCurrentDate()}
                name={name}
                customer={created_by}
              />
            </StyledParametrs>

            <StyledParametrs>
              <RowUnit>{getCurrentDate(1)}</RowUnit>
              <ModalButton
                time="12:00"
                date={getCurrentDate(1)}
                name={name}
                customer={created_by}
              />
              <ModalButton
                time="15:00"
                date={getCurrentDate(1)}
                name={name}
                customer={created_by}
              />
              <ModalButton
                time="18:00"
                date={getCurrentDate(1)}
                name={name}
                customer={created_by}
              />
            </StyledParametrs>

            <StyledParametrs>
              <RowUnit>{getCurrentDate(2)}</RowUnit>
              <ModalButton
                time="12:00"
                date={getCurrentDate(2)}
                name={name}
                customer={created_by}
              />
              <ModalButton
                time="15:00"
                date={getCurrentDate(2)}
                name={name}
                customer={created_by}
              />
              <ModalButton
                time="18:00"
                date={getCurrentDate(2)}
                name={name}
                customer={created_by}
              />
            </StyledParametrs>
          </Row>
        </Row>
      </Row>
    </Wrapper>
  );
}

export default OrderMoviesRow;
