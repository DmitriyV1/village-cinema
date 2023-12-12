import { createContext } from "react";
import styled from "styled-components";

const StyledTable = styled.div`
  border: 1px solid var(--color-grey-500);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const StyledBody = styled.section`
  padding: 1.2rem 2.4rem;
  background-color: var(--color-grey-200);
  /* border-bottom: 1px solid black; */
  max-width: 55vw;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-500);
  }
`;

const Empty = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
`;

const TableContext = createContext();

function Table({ columns, children }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <StyledTable role="table">{children}</StyledTable>
    </TableContext.Provider>
  );
}

function Body({ data = [], render }) {
  if (!data.length || data === undefined)
    return <Empty>No data to show at this moment</Empty>;

  return <StyledBody>{data.map(render)}</StyledBody>;
}

Table.Body = Body;

export default Table;
