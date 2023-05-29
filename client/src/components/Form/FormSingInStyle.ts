import styled from "styled-components";
import { defaultTheme } from "../../styles/defaultThame";

export const FormSingIn = styled.form`
    text-align: left;
    width: 20.625rem;

    label, input, button 
    {
        width: 100%;
        display: block;
        font-weight: 500;
        font-size: 14px;
        color:${defaultTheme.black};
    }

    label {
        margin: 28px 0 6px 0;
    }

    button {
        margin-top: 32px;
    }
`