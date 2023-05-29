import styled from "styled-components"
import { defaultTheme } from "../../styles/defaultThame"

export const Footer = styled.footer`
    display: flex;
    width: 100%;
    height: 1.875rem;
    color: black;
    background-color: ${defaultTheme.green};
    position: absolute;
    bottom: 0;
    left: 0;
    
    h6 {
        margin: auto;
        font-size: 12px;
    }
`