import styled from "styled-components";
import { defaultTheme } from "../../styles/defaultThame";
import { devices } from "../../styles/responsive";


export const DivButtonContainer = styled.button`
    width: 330px;
    height: 45px;

    outline: none;
    cursor: pointer;

    font-size: 16px;
    font-weight: 600;
    border: none;
    border-radius: 8px;
    margin-bottom: 16px;
    
    background: ${defaultTheme.white};
    color:${defaultTheme.black};

    :hover 
    {
        background: ${defaultTheme.grayHover};
    }

    @media${devices.laptop}
    {
        width: 170px;
        font-size: 12px;
    
    }

    @media${devices.tablet}
    {
        width: 150px;
        font-size: 12px;
    }

    @media${devices.mobileL}
    {
        width: 100px;
        font-size: 12px;
    }

`

export const ButtonSingIn = styled.button`

    width: 250px;
    height: 50px;
    font-size: 16px;
    border-radius: 8px;
    font-weight: 700;
    cursor: pointer;
    color: white !important;
    background: ${defaultTheme.black};
    border-style: solid;
`

