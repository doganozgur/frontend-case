import styled from "styled-components";

export const StyledInput = styled.span`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  > span {
    width: 1.375rem;
    height: 1.375rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: ${({ type }) => (type === "radio" ? "100vh" : "2px")};
    border: 2px solid
      ${({ active, theme }) =>
        active ? `${theme.colors.primary}` : `${theme.colors.checkMarkBorder}`};
  }
  input[type="radio"],
  input[type="checkbox"] {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
`;
