import styled from "styled-components";


export const PhotoContainer = styled.div`
    display: flex;
    /* justify-content: space-between; */
    width: 100%;
`;


export const ImageProfile = styled.img`
    width: 140px;
    height: 140px;
    object-fit: cover;
    border-radius: 50%;
`

export const InfoProfile = styled.div`
    display: flex;
    flex-direction: column;
    /* border: 2px solid; */
    width: 60%;
    padding: 5px 4px;
`

export const Button = styled.div`
    background: #BF29A3;
    color: white;
    text-align: center;
    padding: 1rem 2rem;
    margin-top: 2rem;

`
