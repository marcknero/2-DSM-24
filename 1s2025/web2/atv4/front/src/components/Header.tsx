import { Link } from "react-router-dom"
import styled from "styled-components"

export function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <Menu />
        </HeaderContainer>
    );
};

function Menu() {
    return (
        <MenuContainer>
            <Link to="/megasena"> Megasena </Link>
            <Link to="/jogos"> Jogos </Link>
        </MenuContainer>
    );
};

function Logo() {
    return (
        <LogoContainer>
            <h1>Fatec</h1>
            <h3>Jacareí</h3>
            <h4>Prof. Francisco de Moura</h4>
        </LogoContainer>
    );
};

const HeaderContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: flex-end;
    justify-content: space-between;
    padding: 0px;
    margin: 2px;
    border-radius: 15px;
    box-shadow: 1px 5px 5px rgba(0, 0, 0, 0.2);
    background-color: rgba(0, 0, 0, 0.4);
`
const MenuContainer = styled.div`
    display: flex;
    adding: 20px;
    padding:10px;
    color: black;
    textDecoration: none;

    & > a {
    text-decoration: none;
    font-size: 18px;
    padding: 8px;
    color: inherit;
    }
    `
const LogoContainer = styled.div`
    align-self: start;
    padding: 10px;
    text-align: end;
    line-height: 0;

    &:hover {
    cursor: default;
    }
`