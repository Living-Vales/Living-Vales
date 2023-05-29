import styled from "styled-components";
import { defaultTheme } from "../../styles/defaultThame";


export const DivButtonContainer = styled.div`
    display: flex;
    margin-left: 16px;
    
    a {
        background: ${defaultTheme.white};
        border: 1px solid ${defaultTheme.black};
        border-radius: 6px;
        font-family: 'Inter';
        font-style: regular;
        font-size: 14px;
        color: ${defaultTheme.black};
        padding: 6.5px 16px;
    
        &:hover {
            background: ${defaultTheme.buttonHover};
        }    
    }

    
    a:link {
        text-decoration: inherit;
        color: inherit;
    }
    
    a:visited {
        text-decoration: inherit;
        color: inherit;
    }
`