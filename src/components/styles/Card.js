import styled from "styled-components";

export const Card = styled.article`
> div {
  background-color: ${({ theme }) => theme.colors.white};
  padding: 1.5rem;
}
`;
