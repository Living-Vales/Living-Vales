import { FormSingInCustom } from "../components/Form/FormSingIn";
import { StyledFooter } from "../components/Footer/StyledFooter";
import { DivPageContainer, DivContainer, DivHeader } from "../styles/SingIn";
import { LogosHeader } from "../components/Header/LogosHeader";

function Signin() {
    return (
        <>
            <DivHeader>
                <LogosHeader/>
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