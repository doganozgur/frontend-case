import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.875rem;
`;

export const PaginationList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding-inline: 3.5rem;
`;

export const ListItem = styled.li`
  font-weight: 600;
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.clrWhite : theme.colors.clrNeutral900};
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.primary : "transparent"};
  padding: 0.75rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 0.125rem;
`;

export const Navigate = styled.button`
  display: flex;
  align-items: center;
  gap: 0.875rem;
  color: ${({ active, theme }) =>
    active ? theme.colors.primary : theme.colors.clrNeutral900};
  border: 0;
  background-color: ${({ active, theme }) =>
    active ? theme.clr.primary : "transparent"};
  cursor: pointer;
  font-weight: 600;
  font-family: ${({ theme }) => theme.fontFamily.body};
`;
