import styled from "styled-components";
import Seats from "./Seats";
import { createContext, useState } from "react";
import Button from "./Button";
import { addOrder } from "../orders/apiOrders";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

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
  const user = useQuery({ queryKey: ["user"], retry: false });

  console.log(seat);

  function handleClick() {
    // user.data === undefined
    //   ? toast.error("You have to be logged in")
    //   : addOrder({ time, date, movie_name: name, customer, seat })
    // toast.success("You`ll get email message with your ticket!");

    if (user.data === undefined) {
      toast.error("You have to be logged in");
      return;
    }

    addOrder({ time, date, movie_name: name, customer, seat });
    toast.success("You`ll get email message with your ticket!");
    // QueryClient.invalidateQueries({ queryKey: ["orders"] });
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
