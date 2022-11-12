import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 4.125rem;
  & > div {
    height: 100%;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-start;
  @media (${({ theme }) => theme.screens.sm}) {
    justify-content: center;
  }
  align-items: center;
  height: 100%;
  position: relative;
  > img {
    height: 2.52rem;
    max-width: 100%;
  }
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    @media (${({ theme }) => theme.screens.lg}) {
      right: 6.5rem;
    }
  }
`;
