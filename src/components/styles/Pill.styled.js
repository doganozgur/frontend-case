import styled from "styled-components";

export const PillStyled = styled.button`
  background-color: ${({ theme, active }) =>
    active ? theme.colors.primary : theme.colors.clrPurple100};
  color: ${({ theme, active }) =>
    active ? theme.colors.clrWhite : theme.colors.primary};
  padding: 0.47rem 0.9rem;
  border: 0;
  border-radius: 0.125rem;
  font-weight: 600;
  font-size: 0.8125rem;
  cursor: pointer;
`;
