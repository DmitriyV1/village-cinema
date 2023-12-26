import styled from "styled-components";
import Seats from "./Seats";
import { createContext, useEffect, useState } from "react";
import Button from "./Button";
import { addOrder } from "../orders/apiOrders";

const Wrapper = styled.div`
  width: 40vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Display = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20vw;
  height: 10vh;
  background-color: var(--color-grey-300);
`;

const StyledSeats = styled.div`
  padding-top: 5vh;
  display: flex;
`;

const ButtonsContainer = styled.div`
  padding-top: 5vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SeatContext = createContext();

function BuyTicket({ time, date, name, customer }) {
  const [seat, setSeat] = useState();

  function handleClick() {
    addOrder({ time, date, movie_name: name, customer, seat });
  }

  return (
    <>
      <Wrapper>
        <SeatContext.Provider value={{ seat, setSeat }}>
          <Display>Display</Display>
          <StyledSeats>
            <Seats time={time} date={date} name={name} />
          </StyledSeats>
          <ButtonsContainer>
            <Button
              variation={seat === undefined ? "danger" : "primary"}
              disabled={seat === undefined ? true : false}
              onClick={handleClick}
            >
              Buy
            </Button>
          </ButtonsContainer>
        </SeatContext.Provider>
      </Wrapper>
    </>
  );
}

export default BuyTicket;
