import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.8rem;
  width: auto;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src="cinema-logo.svg" alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
