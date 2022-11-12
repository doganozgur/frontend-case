import styled from "styled-components";

export const BasketContainer = styled.aside`
  border: 0.5rem solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.clrWhite};
  padding: 1.625rem;
  display: none;
  flex-direction: column;
  @media (min-width: ${({ theme }) => theme.screens.lg}) {
    display: flex;
  }
`;

export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  > div {
  }
  border-bottom: 1px solid ${({ theme }) => theme.colors.clrNeutral300};
  padding-block: 1.0625rem;
  :first-child {
    padding-block-start: 0;
  }
`;

export const Price = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  margin-block-start: 0.5rem;
`;

export const TotalPrice = styled.div`
  display: inline-block;
  margin-top: 1rem;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 0.125rem;
  font-weight: 600;
  padding: 1.0625rem 1.3rem;
  margin-left: auto;
`;
