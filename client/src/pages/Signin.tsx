import { FormSingInCustom } from "../components/Form/FormSingIn";
import { DivPageContainer, DivContainer, DivHeader, DivImg, DivInovaLogo } from "../styles/SingIn";
import { StyledFooter } from "../components/Footer/StyledFooter";


function Signin() {
    return (
        <>
            <DivHeader>
                <DivImg/>
                <DivInovaLogo/>
            </DivHeader>
            <DivPageContainer>
                <DivContainer>
                <h1>Faça seu login</h1>
                <FormSingInCustom/>

            </DivContainer> 
            </DivPageContainer>
            <StyledFooter/>
        </>
    );
}

export default Signin