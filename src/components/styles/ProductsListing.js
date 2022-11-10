import styled from "styled-components";

export const Main = styled.main``;

export const Title = styled.h2`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.clrNeutral600};
  margin-bottom: 1rem;
`;

export const PillHolder = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-block-end: 1rem;
`;

export const ProductsCard = styled.div`
  background-color: ${({ theme }) => theme.colors.clrWhite};
  padding: 1.25rem;
  border-radius: 0.125rem;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(2, minmax(124px, 1fr));
  @media (min-width: 40rem) {
    grid-template-columns: repeat(3, minmax(124px, 1fr));
  }
  @media (min-width: 64rem) {
    grid-template-columns: repeat(4, minmax(124px, 1fr));
  }
`;
