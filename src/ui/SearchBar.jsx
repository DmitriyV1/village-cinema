import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const StyledSearchBar = styled.input.attrs(() => ({
  type: "text",
  placeholder: "Я ищу...",
}))`
  font-size: 2.25rem;
  width: 50vw;
  height: 2vw;
  border: solid 0.5px;
  border-radius: 8px;
  border-color: var(--color-grey-400);
  color: var(--color-grey-600);
  /* background-color: var(--color-grey-600); */
  margin-top: 2.8rem;

  &:focus::placeholder {
    color: transparent;
  }
`;

function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();

  const change = function (e) {
    e.preventDefault();

    if (e.target.value.length > 3) {
      setSearchParams({ movie: e.target.value });
    } else {
      setSearchParams("");
    }
  };

  return <StyledSearchBar onChange={change}></StyledSearchBar>;
}

export default SearchBar;
