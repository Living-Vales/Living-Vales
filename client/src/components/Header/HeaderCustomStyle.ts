import styled from "styled-components";
import ic_logo_lv from '../../assets/ic_logo_lv.png';
import ic_logout from '../../assets/ic_logout.png';
import { defaultTheme } from "../../styles/defaultThame";

type HeaderProps = {
    children: React.ReactNode;
};

export const HeaderStyle = styled.header<HeaderProps>`
    width: 100%;
    height: 5rem;
    background-color: ${defaultTheme.green};
    display: flex; 
    align-items: center;
    justify-content: space-between;
`

export const DivLogout = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    margin-right: 32px;
    cursor: pointer;

    h6 {
        font-size: 15px;
        margin-right: 8px;
    }
`

export const Logo = styled.div`
    background-image: url(${ic_logo_lv});
    background-repeat: no-repeat;
    height: 3rem;
    width: 13rem;
    margin-left: 2rem;
    cursor:pointer;
`
   
export const SignOut = styled.div`
    background-image: url(${ic_logout});
    height: 2rem;
    width: 2rem;
    background-repeat: no-repeat;
`



// width: 100%;
// height: 6rem;
// background-color: ${ defaultTheme.primary };
// font-size: 1rem;
// color: ${ defaultTheme.grayText };
// display: flex;
// justify-content: center;
// align-items: center;
// padding:2rem;