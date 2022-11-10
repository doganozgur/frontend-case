import styled from "styled-components";

export const ProductStyled = styled.article``;

export const ImageContainer = styled.div`
  border-radius: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.clrPurple200};
  padding: 1rem;

  @media (min-width: 64rem) {
    height: 124px;
  }
`;
export const Image = styled.img`
  width: 100%;
  max-width: 100%;
`;

export const Price = styled.p`
  display: inline-flex;
  font-weight: 700;
  margin-block: 0.75rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.clrNeutral800};
  margin-block-end: 0.5625rem;
  font-weight: 600;
  height: 2.5rem;
`;
