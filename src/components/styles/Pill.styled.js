import styled from "styled-components";

export const PillStyled = styled.button`
  background-color: ${({ theme, active }) =>
    active ? theme.colors.primary : theme.colors.clrPurple100};
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.625rem 1rem;
  border: 0;
  border-radius: 0.125rem;
  font-weight: 600;
  cursor: pointer;
`;
