import styled from "styled-components";


export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
`;

export const Span = styled.span`
  width: 1.375rem;
  height: 1.375rem;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: ${({ type }) => (type === "radio" ? "100vh" : "2px")};
  border: ${({ type, theme }) =>
    type === "radio" && `2px solid ${theme.colors.clrNeutral300}`};
  box-shadow: ${({ type }) =>
    type === "checkbox" && `0px 1px 7px rgba(93, 56, 192, 0.4)`};
  border-color: ${({ theme, active }) => active && ` ${theme.colors.primary}`};
  svg path {
    display: ${({ active }) => !active && "none"};
    stroke: ${({ theme, type, active }) =>
      type === "checkbox" && active && "#fff"};
  }
  background-color: ${({ theme, type, active }) =>
    type === "checkbox" && active && theme.colors.primary};
`;

export const StyledInput = styled.input`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
`;
