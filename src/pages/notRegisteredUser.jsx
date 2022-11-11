import React, { useContext } from "react";
import { Context } from "@/context";
import { UserForm } from "@/components/UserForm";
import { useRegisterMutation } from "@/container/RegisterMutation";
import { useLoginMutation } from "@/container/LoginMutation";


export const NotRegisteredUser = () => {

    const { registerMutation, data, loading, error } = useRegisterMutation()
    const { loginMutation, error: errorLogin } = useLoginMutation();
    const { activateAuth } = useContext(Context);
    

    const registerSubmit = ({ email, password }) => {
        const input = { email, password }
        const variables = { input }
        registerMutation({ variables }).then(({ data }) => {
            const { signup } = data; 
            activateAuth(signup)
        })
    }

    const loginSubmit = ({ email, password }) => {
        const input = { email, password }
        const variables = { input }
        loginMutation({ variables }).then(({ data }) => {
            const { login } = data;
            activateAuth(login);
        })
    }


    return <>
        <UserForm loading={loading} error={error} onSubmit={registerSubmit} title='Regístrarse'/>
        <UserForm loading={loading} error={errorLogin} onSubmit={loginSubmit} title='Iniciar Sesion'/>
    </>
  
    
}
