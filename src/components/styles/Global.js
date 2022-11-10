import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        font-family: ${({ theme }) => theme.fontFamily.body};
        font-size: ${({ theme }) => theme.fontSize.textMd};
	    line-height: 1.125rem;
        background-color: ${({ theme }) => theme.colors.clrNeutral100}
    }
    ol, ul {
	    list-style: none;
    }
    
`;
