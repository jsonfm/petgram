import React, { useState } from 'react';
import { Form, Input, Button, FormContainer, Title, Error } from "./styles"


export const UserForm = ({ error, loading, title, onSubmit }) => {
    const [form, setForm] = useState({ email: '',password: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ ...form });
    }

    const handleForm = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }
    // console.log("Loading: ", loading);
    return (
        <FormContainer>
            <Title>{title}</Title>
            <Form onSubmit={handleSubmit} disabled={loading}>
                <Input placeholder="Email" name="email" onChange={handleForm} defaultValue={form.email} />
                <Input placeholder="Password" type="password" name="password" onChange={handleForm} defaultValue={form.password}/>
                <Button>{title}</Button>
            </Form>
            {error && <Error>{error}</Error>}
        </FormContainer>
    )
}
