import { useNavigate } from 'react-router-dom';
import React, { useContext } from 'react';
import {HeaderStyle, Logo, SignOut, DivLogout, DivInovaLogo, ContainerLogo } from './HeaderCustomStyle'
import { AuthContext } from '../../contexts/auth';


export function HeaderCustom( ) {

    const navigate = useNavigate();

    const { logout } = useContext(AuthContext);

    const exit = async () => {
        logout();
        navigate("/login") 
    }
    
    const home = async () => {
        navigate('/');
    }

    return (
        <HeaderStyle> 
            <>
            <ContainerLogo >
                <Logo onClick={home} />
                <DivInovaLogo/>
            </ContainerLogo>

            <DivLogout onClick={exit}>
            <h6>Sair</h6>
            <SignOut
            />
            </DivLogout>
            </>
            
        </HeaderStyle>
    )
}
