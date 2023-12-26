import { useContext, useEffect } from "react";
import styled from "styled-components";
import { SeatContext } from "./BuyTicket";
import { getOrder } from "../orders/apiOrders";
import useGetOrder from "../orders/useGetOrder";

const StyledSeats = styled.div`
  display: grid;
  grid-template-columns: 3rem 3rem 3rem 3rem 3rem;
  grid-template-rows: 3rem 3rem 3rem;
  row-gap: 2rem;
  column-gap: 2rem;
`;

function Seats({ time, date, name }) {
  const { setSeat } = useContext(SeatContext);
  const x = [];

  const order = { time, date, name };
  const data = useGetOrder(order);
  const orderList = data?.orders?.data;

  function handleClick(e) {
    e.preventDefault();
    const target = e.target.value;
    setSeat(target);
  }

  orderList?.forEach((e) => x.push(e.seat));

  return (
    <>
      <StyledSeats onClick={(e) => handleClick(e)}>
        <button value={1} disabled={x.includes("1")}>
          1
        </button>
        <button value={2} disabled={x.includes("2")}>
          2
        </button>
        <button value={3} disabled={x.includes("3")}>
          3
        </button>
        <button value={4} disabled={x.includes("4")}>
          4
        </button>
        <button value={5} disabled={x.includes("5")}>
          5
        </button>
        <button value={6} disabled={x.includes("6")}>
          6
        </button>
        <button value={7} disabled={x.includes("7")}>
          7
        </button>
        <button value={8} disabled={x.includes("8")}>
          8
        </button>
        <button value={9} disabled={x.includes("9")}>
          9
        </button>
        <button value={10} disabled={x.includes("10")}>
          10
        </button>
        <button value={11} disabled={x.includes("11")}>
          11
        </button>
        <button value={12} disabled={x.includes("12")}>
          12
        </button>
        <button value={13} disabled={x.includes("13")}>
          13
        </button>
        <button value={14} disabled={x.includes("14")}>
          14
        </button>
        <button value={15} disabled={x.includes("15")}>
          15
        </button>
      </StyledSeats>
    </>
  );
}

export default Seats;
