import styled from "styled-components";
import { NavLink as LinkRouter } from "react-router-dom";
import {fadeIn} from "@/styles/animations";


export const Nav = styled.nav`
    align-items: center;
    background: #fcfcfc;
    border-top: 1px solid #e0e0e0;
    bottom: 0;
    height: 50px;
    justify-content: space-around;
    left: 0;
    margin: 0 auto;
    max-width: 500px;
    position: fixed;
    right: 0;
    width: 100%;
    display: flex;
`

export const Link = styled(LinkRouter)`
    align-items: center;
    color: #888;
    display: inline-flex;
    height: 100%;
    justify-content: center;
    text-decoration: none;
    width: 100%;
    &[aria-current] {
        color: #000;
        &:after {
            ${fadeIn({ time: '0.5s' })};
            content: '·';
            position: absolute;
            bottom: 0;
            font-size: 34px;
            line-height: 20px;
        }
    }
`
