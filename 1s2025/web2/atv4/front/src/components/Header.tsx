import { Link } from "react-router-dom"
import { styles } from "../styles/styles"


export function Header() {
    return <>
        <div style={styles.header}>
            <Logo />
            <Menu />
        </div>
    </>
}

function Menu() {
    return <>
        <div style={styles.menu}>
                <Link to="/megasena"> Megasena </Link>
                <Link to="/jogos"> Jogos </Link>
        </div>
    </>
}

function Logo() {
    return<>
    <div style={styles.logo}>
        <h1>Fatec</h1>
        <h3>Jacareí</h3>
        <h4>Prof. Francisco de Moura</h4>
    </div>
    </>
}