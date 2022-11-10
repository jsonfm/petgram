import React from "react";
import { Context } from "@/context";
import { UserForm } from "@/components/UserForm";
import { useRegisterMutation } from "@/container/RegisterMutation";
import { useLoginMutation } from "@/container/LoginMutation";


export const NotRegisteredUser = () => {
    const { registerMutation, data, loading, error } = useRegisterMutation()
    const { loginMutation } = useLoginMutation();
    
    return (
        <Context.Consumer>
            {
                ({activateAuth}) => {
                    const registerSubmit = ({ email, password }) => {
                        const input = { email, password }
                        const variables = { input }
                        registerMutation({ variables }).then(activateAuth)
                    }

                    const loginSubmit = ({ email, password }) => {
                        const input = { email, password }
                        const variables = { input }
                        loginMutation({ variables }).then(activateAuth)
                    }

                    return <>
                        <UserForm loading={loading} error={error} onSubmit={registerSubmit} title='Regístrarse'/>
                        <UserForm loading={loading} error={error} onSubmit={loginSubmit} title='Iniciar Sesion'/>
                    </>
                }
            }
        </Context.Consumer>
    )
}
