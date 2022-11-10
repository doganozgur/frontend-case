import styled from "styled-components";


export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const Span = styled.span`
  width: 1.375rem;
  height: 1.375rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ type }) => (type === "radio" ? "100vh" : "2px")};
  border: 2px solid ${({ theme }) => theme.colors.clrNeutral300};
  border-color: ${({ theme, active }) => active && ` ${theme.colors.primary}`};
  svg {
    display: ${({ active }) => !active && "none"};
  }
`;

export const StyledInput = styled.input`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
`;
