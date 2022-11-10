import styled from "styled-components";

export const ComboboxStyled = styled.div`
  overflow: hidden;
  max-height: 15.25rem;
  > ul {
    max-height: 8.125rem;
    overflow-y: auto;
    padding: 0.2rem;
  }
`;

export const Searcbar = styled.input`
  border: 2px solid ${({ theme }) => theme.colors.clrNeutral400};
  width: 100%;
  height: 3rem;
  padding: 0.75rem 1rem;
  border-radius: 2px;
  color: ${({ theme }) => theme.colors.clrNeutral700};
  margin-bottom: 1.0625rem;
  :focus {
    outline: none;
  }
  ::placeholder {
    color: ${({ theme }) => theme.colors.clrNeutral500};
  }
`;
