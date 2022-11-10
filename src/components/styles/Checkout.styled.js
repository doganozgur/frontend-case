import styled from "styled-components";

export const Checkout = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  height: 100%;
  color: ${({ theme }) => theme.colors.clrNeutral100};
  display: flex;
  align-items: center;
  white-space: nowrap;
  gap: 0.9rem;
  padding: 1.5rem;
`;
