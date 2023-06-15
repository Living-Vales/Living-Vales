import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { HeaderStyle, SignOut, DivLogout, ContainerLogo } from './HeaderCustomStyle'
import { AuthContext } from '../../contexts/auth';
import { LogosHeader } from "./LogosHeader";


export function HeaderCustom( ) {

    const navigate = useNavigate();

    const { logout } = useContext(AuthContext);

    const exit = async () => {
        logout();
        navigate("/login") 
    }

    return (
        <HeaderStyle> 
            <>
            <ContainerLogo >
                <LogosHeader/>
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
