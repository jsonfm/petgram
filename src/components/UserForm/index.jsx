import React from 'react';
import { useInputValue } from "@/hooks/useInputValue";
import { Form, Input, Button, FormContainer } from "./styles"

export const UserForm = () => {
    const email = useInputValue('');
    const password = useInputValue('');

    const onSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <FormContainer>
            <Form onSubmit={onSubmit}>
                <Input placeholder="Email" {...email} />
                <Input placeholder="Password" type="password" {...password} />
                <Button>Iniciar Sessión</Button>
            </Form>
        </FormContainer>
    )
}
