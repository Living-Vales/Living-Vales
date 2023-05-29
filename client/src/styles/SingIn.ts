import ic_logo_lv from '../assets/ic_logo_lv.png'
import styled from "styled-components";
import { defaultTheme } from "./defaultThame";
import { devices } from "./responsive";

export const DivHeader = styled.header`
    width: 100%;
    height: 5rem;
    background-color: ${defaultTheme.green};
    display: flex; 
    aling-items: center;
    justify-content: flex-start;
`

export const DivImg = styled.div`
    background-image: url(${ic_logo_lv});
    background-repeat: no-repeat;
    height: 3rem;
    width: 13rem;
    margin: 1rem 1rem 1rem 2rem;
`

export const DivContainer = styled.div`
    width: 31.25rem;
    height: 27.8125rem;
    background-color: ${defaultTheme.green};
    text-align: center;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
        font-size: 1.625rem;
    }

    @media${devices.tablet}
    {
        width: 16rem;
        height: 25rem;
    }
`

export const DivPageContainer = styled.div`
    height: 80vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
