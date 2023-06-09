import ic_logo_livingVales from '../assets/ic_logo_living_vales.png'
import ic_logo_inova_vales from '../assets/ic_logo_inova_vales.png'
import ic_logo_avancar_rs from '../assets/ic_logo_avancar_rs.png'
import ic_logo_gov_rs from '../assets/ic_logo_gov_rs.png'
import ic_logo_inova_rs from '../assets/ic_logo_inova_rs.png'
import ic_logo_secretaria_inovacao from '../assets/ic_logo_secretaria_inovacao.png'
import ic_logo_sus from '../assets/ic_logo_sus.png'
import ic_logo_tec4b from '../assets/ic_logo_tec4b.png'
import ic_logo_unisc from '../assets/ic_logo_unisc.png'
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
export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LogoLivingVales = styled.div`
    background-image: url(${ic_logo_livingVales});
    background-repeat: no-repeat;
    height: 3rem;
    width: 13rem;
    margin: 0rem 1rem 0rem 2rem;
`

export const LogoInovaVales = styled.div`
    background-image: url(${ic_logo_inova_vales});
    background-repeat: no-repeat;
    background-size: contain;
    height: 3rem;
    width: 5rem;
    margin: 0rem 1rem 0rem 1rem;
`

export const LogoAvancarRs = styled.div`
    background-image: url(${ic_logo_avancar_rs});
    background-repeat: no-repeat;
    background-size: contain;
    height: 3rem;
    width: 9rem;
    margin: 1rem 0.5rem 0rem 1rem;
`

export const LogoGovRs = styled.div`
    background-image: url(${ic_logo_gov_rs});
    background-repeat: no-repeat;
    background-size: contain;
    height: 3rem;
    width: 4rem;
    margin: 0rem 1rem 0rem 0.5rem;
`

export const LogoInovaRs = styled.div`
    background-image: url(${ic_logo_inova_rs});
    background-repeat: no-repeat;
    background-size: contain;
    height: 2.5rem;
    width: 8rem;
    margin: 0rem 1rem 0rem 1rem;
`

export const LogoSecretariaInovacao = styled.div`
    background-image: url(${ic_logo_secretaria_inovacao});
    background-repeat: no-repeat;
    background-size: contain;
    height: 3rem;
    width: 8rem;
    margin: 0rem;
`

export const LogoSus = styled.div`
    background-image: url(${ic_logo_sus});
    background-repeat: no-repeat;
    background-size: contain;
    height: 2rem;
    width: 4rem;
    margin: 0rem 1rem 0rem 0.5rem;
`

export const LogoTec4b = styled.div`
    background-image: url(${ic_logo_tec4b});
    background-repeat: no-repeat;
    background-size: contain;
    height: 2rem;
    width: 7rem;
    margin: 0 0.5rem 0 1rem;
`

export const LogoUnisc = styled.div`
    background-image: url(${ic_logo_unisc});
    background-repeat: no-repeat;
    background-size: contain;
    height: 3rem;
    width: 4rem;
    margin: 0rem 0.5rem 0rem 0.5rem;
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
