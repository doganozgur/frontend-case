import styled from "styled-components";

export const Searcbar = styled.input`
  border: 2px solid ${({ theme }) => theme.colors.clrNeutral500};
  width: 100%;
  height: 3rem;
  padding: 0.75rem 1rem;
  border-radius: 2px;
  color: ${({ theme }) => theme.colors.clrNeutral800};
  :focus {
    outline: none;
  }
  ::placeholder {
    color: ${({ theme }) => theme.colors.clrNeutral600};
  }
`;
