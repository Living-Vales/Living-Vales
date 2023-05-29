import styled from "styled-components";
import { defaultTheme } from "../../styles/defaultThame";
import ic_eye from "../../assets/ic_eye.png";
import ic_eye_off from "../../assets/ic_eye_off.png";

interface InputProps {
    errMsg?: boolean
}

interface PassProps {
    hidePassword: boolean
}

export const Input = styled.input<InputProps>`
    height: 2.8125rem;
    padding: 0 1rem 0 1rem;
    font-size: 14px;
    font-weight: 500;
    border-radius: 10px;
    color: ${defaultTheme.black};
    background: ${p => p.errMsg ? 'linear-gradient(rgba(255, 0, 0, 0.13), rgba(255, 0, 0, 0.13)), white' : defaultTheme.white};
    border: ${p => p.errMsg ? '1px solid ' + defaultTheme.redDanger : 'none'};
    outline: none;
    
    ::placeholder {
        color: ${defaultTheme.grayWeak};
    }
    
    ::-ms-clear,
    ::-ms-reveal {
        display: none;
    }
`

export const MsgError = styled.div `
    font-size: 12px;
    margin: 8px 0 -16px 0;
    color: ${defaultTheme.redDanger};
`
export const HidePassword = styled.div<PassProps>`
    cursor: pointer;
    width: 24px;
    height: 24px;
    background-image: url(${p => p.hidePassword ? ic_eye_off : ic_eye });
    background-repeat: no-repeat;
    margin-left: 18rem;
    position: absolute;
`

export const PasswordDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

