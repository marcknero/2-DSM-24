import { Link } from "react-router-dom"
import { headerStyle, logoStyle, menuStyle } from "../styles/index"


export function Header() {
    return <>
        <div style={headerStyle}>
            <Logo />
            <Menu />
        </div>
    </>
}

function Menu() {
    return <>
        <div style={menuStyle}>
                <Link to="/palpite"> Megasena </Link>
                <Link to="/historico"> Histórico </Link>
        </div>
    </>
}

function Logo() {
    return<>
    <div style={logoStyle}>
        <h1>Fatec</h1>
        <h3>Jacareí</h3>
        <h4>Prof. Francisco de Moura</h4>
    </div>
    </>
}