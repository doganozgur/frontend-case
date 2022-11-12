import styled from "styled-components";

export const StyledApp = styled.div`
  margin-top: 3.085rem;
  display: flex;
  flex-direction: column-reverse;
  gap: 2rem;
  > * {
    flex: 1 1 100%;
  }

  @media (min-width: ${({ theme }) => theme.screens.sm}) {
    gap: 1rem;
    align-items: flex-start;
    flex-direction: row;
    > :nth-child(1) {
      flex: 1;
    }
    > :nth-child(2) {
      flex: 2;
    }
    > :nth-child(3) {
      flex: 1;
    }
  }
`;
