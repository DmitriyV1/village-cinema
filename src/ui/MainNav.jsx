import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.8rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-20npm 0);
    /* border-radius: var(--border-radius-sm); */
  }

  border-bottom: 1px solid var(--color-grey-400);
`;

function MainNav() {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/poster">
            <span>
              Poster <br />
            </span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/schedule">
            <span>Schedule </span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/addMovie">
            <span>Add movie </span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
