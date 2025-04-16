import { Link } from "react-router-dom"

export function Header() {
    return <>
        <div>
            <Logo />
            <Menu />
        </div>
    </>
}

function Menu() {
    return <>
        <div>
                <Link to="/palpite"> Palpite </Link>
                <Link to="/historico"> Histórico </Link>
        </div>
    </>
}

function Logo() {
    return<>
    <div>
        <h1>Fatec</h1>
        <h3>Jacareí</h3>
        <h4>Prof. Francisco de Moura</h4>
    </div>
    </>
}