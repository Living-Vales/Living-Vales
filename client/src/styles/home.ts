import styled from "styled-components";
import { defaultTheme } from "./defaultThame";
import ic_symbol_lv from "../assets/ic_symbol_lv.png"

export const DivPane = styled.div`
    width: 100vw;
    height: 80vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const DivContainer = styled.div`
    width: 500px;
    height: 445px;
    background-color: ${defaultTheme.green};
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const TitleDiv = styled.div`
    width: 17rem;
    height: 3rem;
    text-align: center;
    margin-bottom: 28px;

    h3 {
        font-weight: 500;
        font-size: 20px;
    }

`

export const IconDiv = styled.div`
    background-image: url(${ic_symbol_lv});
    background-repeat: no-repeat;
    width: 5rem;
    height: 4rem;
    margin-bottom: 28px;
`