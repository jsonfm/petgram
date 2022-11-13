import styled from "styled-components";

export const Form = styled.form`
    padding: 16px 0%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const Input = styled.input`
    border: 1px solid #ccc;
    border-radius: 3px;
    margin-bottom: 0;
    padding: 8px 12px;
    display: block;
    width: 100%;
`

export const Button = styled.button`
    background: #BF29A3;
    border-radius: 3px;
    color: #fff;
    height: 32px;
    display: block;
    width: 100%;
    text-align: center;
    cursor: pointer;
`

export const FormContainer = styled.div`
    padding: 0 2rem;
`

export const Title = styled.h3`
    font-size: 16px;
    font-weight: 500;
    padding: 8px 0;
`

export const Error = styled.span`
    font-size: 14px;
    color: red;
`;
