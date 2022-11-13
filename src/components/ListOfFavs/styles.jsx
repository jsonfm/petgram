import styled from "styled-components";

export const Grid = styled.div`
    display: flex;
    /* justify-content: space-around; */
    flex-wrap: wrap;
    padding: 20px 8px;
    gap: 10px;
`

export const Image = styled.img`
    object-fit: cover;
    width: 30%;
    height: 100px;
    border-radius: 12px;
    cursor: pointer;
    transition: .25s;

    &:hover {
        transform: scale(1.1);
    }
`
