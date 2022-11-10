import styled from "styled-components";

export const Counter = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6875rem;
  > button {
    background-color: transparent;
    border: 0;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding-block: 0.3rem;
  }
`;

export const Number = styled.span`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.clrWhite};
  font-weight: bold;
  font-size: 0.9375rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
`;
