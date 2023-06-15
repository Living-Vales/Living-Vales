import styled from "styled-components";
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

export const ContainerLogo = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
`
   
export const SignOut = styled.div`
    background-image: url(${ic_logout});
    height: 2rem;
    width: 2rem;
    background-repeat: no-repeat;
`