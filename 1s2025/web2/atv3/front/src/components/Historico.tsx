import { useContext } from "react";
import { Ball } from "./Ball";
import { MegaCtx } from "../contexts/MegaCtx";
import { displayStyle } from "../styles/displayStyle";



export default function Historico() {
    const { history } = useContext(MegaCtx);

    return <>
        <div >
            <h2>Histórico de Palpites:</h2>
            <ul >
                {history.map((entry, index) => (
                    <li style={displayStyle} key={index}>{entry.map((value, index) =>(
                         <Ball key={index} label={value} />))}</li>
                ))}
            </ul>
        </div>
    </>
}
