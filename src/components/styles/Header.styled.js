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
  justify-content: center;
  align-items: center;
  height: 100%;
  > img {
    flex: calc(100% - 48px);
    width: 8.828125rem;
    height: 2.52rem;
  }
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
