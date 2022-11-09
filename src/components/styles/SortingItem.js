import styled from "styled-components";

export const SortingItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  :not(:last-child) {
    margin-bottom: 1rem;
  }
`;
