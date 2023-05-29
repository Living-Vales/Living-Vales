import styled from "styled-components";
import { defaultTheme } from "./defaultThame";
import ic_back from "../assets/ic_back.png";

export const DivContainerPage = styled.div`
   height:100vh;
   background-color: ${defaultTheme.white};
`
export const DivContainerMap = styled.div`
    margin: 32px;
`
export const MapHeader = styled.header`
    display:flex;
    align-items: center;
    height: 32px;
    margin-bottom: 1rem;
`
export const TitleDiv = styled.div`
    display: flex;
    align-items: center;
    width: 50%;

    h3 {
        font-size: 20px;
        font-weight: 700;
        color: ${defaultTheme.black};
        margin-top: auto;
        margin-bottom: auto;
        margin-left: 6px;
    }
`
export const ReturnButton = styled.div`
    background-image: url(${ic_back});
    background-repeat: no-repeat;
    height: 24px;
    width: 24px;
    cursor: pointer;
`

export const DivFilterContent = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    justify-content: flex-end;
`