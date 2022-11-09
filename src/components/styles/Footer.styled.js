import styled from "styled-components";

export const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 2.5rem 0;
    color: ${({theme}) => theme.colors.primary};
    > a {
        color: ${({theme}) => theme.colors.primary};
        text-decoration: none;
    }
    `