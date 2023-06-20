import { createGlobalStyle } from "styled-components";
import { defaultTheme } from "./defaultThame";
import cover from "../assets/cover.png"


export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-image: url(${cover});
    background-repeat: no-repeat;
    background-position: center;
    color: ${defaultTheme.black};
    font-family: Inter, Helvetica, sans-serif;
    font-weight: 400;
    font-size: 1rem;
}

`