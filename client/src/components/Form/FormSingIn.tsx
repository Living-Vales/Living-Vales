import React, { useCallback, useContext, useState } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/auth"
import { ButtonSingInCustom } from "../Button/ButtonSingIn"
import { MsgError } from "../Input/InputCustomStyle"
import { InputCustom } from "../Input/InputCustom"
import { FormSingIn } from "./FormSingInStyle"

export const FormSingInCustom = () => {

    const methods = useForm();
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);
    
    const [error, setError] = useState("");
    const [emailEmpty, setEmailEmpty ] = useState(false);
    const [passwordEmpty, setPasswordEmpty ] = useState(false);

    const handleLogin =  async ( data: any) =>  {
        setEmailEmpty(false);
        setPasswordEmpty(false);

        if( !data.email && !data.password ) {

            setError("Preencha todos os campos");
            setEmailEmpty(true);
            setPasswordEmpty(true);
        }
        
        else if ( !data.email )
        {
            setError("Preencha seu e-mail");
            setEmailEmpty(true);
        }
        
        else if( !data.password )
        {
            setError("Preencha sua senha");
            setPasswordEmpty(true);
        }

        else
        {
            const loginReturn : number = await login( data );

            if( loginReturn == 201 ) {
                navigate("/");
            }

            else if( loginReturn == 500 ) {

                setError('Erro ao acessar o servidor');
            }

            else if ( loginReturn == 401 ) {
                setError('O e-mail e a senha digitados não correspondem aos nossos registros. Verifique e tente novamente');
                setEmailEmpty(true);
                setPasswordEmpty(true);
            }
        }  
    }

    return(
        <>
        <FormProvider {...methods} >
            <FormSingIn onSubmit={methods.handleSubmit(handleLogin)}>
                <InputCustom
                     defaultType="email"
                     placeholder="Exemplo: email@host.com.br"
                     label="E-mail:"
                     id={"email"}
                     errorMessage={emailEmpty}
                     />
                    <InputCustom 
                        defaultType="password"
                        placeholder="Digite sua senha"
                        label="Senha:"
                        id={"password"}
                        errorMessage={passwordEmpty}
                        showHidePassword/>
                <MsgError>
                    {error}
                </MsgError>
                <ButtonSingInCustom
                label="Entrar"
                 />
            </FormSingIn>
        </FormProvider>
        </>
     )
}