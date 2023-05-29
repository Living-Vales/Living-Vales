import React from 'react';
import { Button } from '../components/Button/HomButtom';
import { StyledFooter } from '../components/Footer/StyledFooter'
import { ButtonsContainer, DivContainer, DivPane, IconDiv, TitleDiv } from '../styles/home';
import { HeaderCustom} from '../components/Header/HeaderCustom'
import { useNavigate } from "react-router-dom";

export function HomePage() {

    const navigate = useNavigate();

    const visitasBLira = () => {
        navigate("/vblira")
    }

    const visitas = () => {
        navigate("/visitas")
    }

    const map = () => {
        navigate("/mapa");
    }
        return (
        <>
            <HeaderCustom/>
            <DivPane>
                <DivContainer>
                    <IconDiv/>
                    <TitleDiv>
                        <h3>Atualize-se sobre os pontos de dengue da sua cidade:</h3>
                    </TitleDiv>
                    <ButtonsContainer>
                        <Button label={' Tabela visitas boletim liraa'} onClick={visitasBLira}/>
                        <Button label={' Tabela visitas'} onClick={visitas} />
                        <Button label={' Mapa'} onClick={map} />
                    </ButtonsContainer>
                </DivContainer>
            </DivPane>
            <StyledFooter/>
        </>
        );
}

