import {
        LogoContainer, LogoLivingVales, 
        LogoInovaVales, LogoAvancarRs, LogoGovRs,
        LogoInovaRs, LogoSecretariaInovacao,
        LogoSus, LogoTec4b, LogoUnisc } from './LogosHeaderStyle'


export function LogosHeader() {
    
    return(
        <LogoContainer>
            <LogoLivingVales/>
            <LogoInovaVales/>
            <LogoGovRs/>
            <LogoUnisc/>
            <LogoSus/>
            <LogoAvancarRs/>
            <LogoInovaRs/>
            <LogoSecretariaInovacao/>
            <LogoTec4b/>
        </LogoContainer> 
    )
}