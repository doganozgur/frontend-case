import styled from "styled-components";

export const Button = styled.button`
  border: 0;
  cursor: pointer;
  padding-block: 0.4375rem;
  width: ${({ variant }) => variant === "wide" && "100%"};
  color: ${({ theme }) => theme.colors.clrWhite};
  background-color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  font-size: 0.75rem;
  border-radius: 0.125rem;
  transition: 0.2s all ease;

  &:hover {
    background-color: #198cb0;
  }
`;
