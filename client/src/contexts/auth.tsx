import React, { createContext, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import api  from '../services/api'

type SignInCredentials = {
    email: string;
    password: string;
};

type AuthContextData = {
    signed: Boolean;
    login(credentials: SignInCredentials): Promise<number>;
    logout: () => void;
 };

type AuthProviderProps = {
    children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData );

export function useAuth()
{
    const context = useContext(AuthContext);
    return context;
}

export function AuthProvider({children} : AuthProviderProps ) 
{
 
    const [user, setUser] = useState();

    async function login( {email, password} : SignInCredentials) {

        let result = 0; 

          await api.post('user/login', {
                email: email,
                password: password

            }).then((response) => {

                setUser(response.data);
                localStorage.setItem('@App:user', JSON.stringify(response.data.user));
                localStorage.setItem('@App:token', response.data.sessionId);  

                result = response.status

            }).catch((error) => 
            {
                result = error.response.status 
            })

        return result
    }

    function logout() 
    {
        localStorage.removeItem("@App:user");
        localStorage.removeItem("@App:token");
    }
    
    useEffect(() => {
        
        const storagedUser = localStorage.getItem('@App:user');
        const storagedToken = localStorage.getItem('@App:token');

        if( storagedUser && storagedToken ) {
            setUser(JSON.parse(storagedUser));
            api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
        }
    }, []);
    
    return (
        <AuthContext.Provider value={{signed: Boolean(user), login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;