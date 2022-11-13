import styled, { keyframes } from "styled-components";


export const shimer = keyframes`
    100% {
        left: 100%;
    }
`


export const Article = styled.article`
    border-radius: 10px;
    min-height: 200px;
    margin: 2rem 0;
    /* box-shadow: 0 0 10px gray; */
`

export const Shimmer = styled.div`
    border-radius: ${ props => props.borderRadius || '10px'};
    min-height: ${ props => props.minHeight || '160px'};
    position: relative;
    background-color: rgb(200, 200, 200);
    overflow: hidden;
    margin-bottom: 10px;
    &::after{
        content: "";
        height: 100%;
        width: 100px;
        position: absolute;
        left: 0;
        top: 0;
        background: linear-gradient(
                to left, 
                rgba(255, 255, 255, 0) 0, 
                rgba(255, 255, 255, 0.2) 20%,
                rgba(255, 255, 255, 0.5) 60%,
                rgba(255, 255, 255, 0)
        );
        animation: ${shimer} 1.5s infinite;
    }
    
`
