import { Link } from "react-router-dom"
import { HeaderContainer, LogoContainer, MenuContainer } from "../styles/styles";
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
            <Link to="/historico"> Historico </Link>
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

