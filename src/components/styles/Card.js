import styled from "styled-components";

export const Card = styled.article`
  > div {
    background-color: ${({ theme }) => theme.colors.clrNeutral100};
    padding: 1.5rem;
  }
`;
