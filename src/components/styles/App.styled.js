import styled from "styled-components";

export const StyledApp = styled.main`
  margin-top: 3.085rem;
  display: flex;
  gap: 1rem;
  
  > :nth-child(1) {
    flex: 1;
  }
  > :nth-child(2) {
    flex: 2;
  }
  > :nth-child(3) {
    flex: 1;
  }
`;
