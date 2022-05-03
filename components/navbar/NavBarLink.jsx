import styled from "styled-components"
import { Link } from "react-router-dom";
import { useState } from "react";

const SNavBarLinkUnderline = styled.hr`
    margin: 0;
    border: none;

    height: 2px;
    width: 0;

    background-color: var(--font-color-light);

    transition: width .25s;
`

const SDesplegable = styled.div`
    position: absolute;
    background: var(--color5);
    display: flex;
    flex-direction: column;
    display: none;

    & *{
        padding: 10px;
        color: var(--font-color-light);
        text-decoration: none;
        text-transform: uppercase;
        font-weight: bold;

        &:hover, &:focus {
            background: var(--color4);
        }

    }

    @media (max-width: 1000px) {
        position: static;
        & *{
            margin: 5px 0;
            background: var(--color4);
            border-radius: 10px;
            &:hover, &:focus {
                border-radius: 10px;
                background: var(--color3);
                color: var(--color7);
            }

        }
    }

`

const SNavBarLink = styled.div`
    text-decoration: none;
    font-weight: bold;
    font-size: 20px;
    color: var(--font-color-light);
    text-transform: uppercase;
    display: flex;
    cursor: pointer;
`

const SNavBarLinkWrapper = styled.div`
    &:hover ${SNavBarLinkUnderline}{
        width: 100%;
    }

    &:hover ${SDesplegable}, &:focus ${SDesplegable}, &:focus-within ${SDesplegable} {
        display: flex;
    }

`

const NavBarLink = props => {

    if (props.desplegable) {

        return (
            <SNavBarLinkWrapper>
                <SNavBarLink {...props} tabIndex={0}>
                    {props.children}
                </SNavBarLink>
                <SNavBarLinkUnderline />
                <SDesplegable>
                    {props.desplegable}
                </SDesplegable>
            </SNavBarLinkWrapper>
        )
    }
    return (
        <>
            <SNavBarLinkWrapper>
                <SNavBarLink as={Link} {...props}>
                    {props.children}
                </SNavBarLink>
                <SNavBarLinkUnderline />
            </SNavBarLinkWrapper>
        </>
    )
}

export default NavBarLink