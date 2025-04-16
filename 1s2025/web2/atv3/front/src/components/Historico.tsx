import { useContext } from "react";
import { Ball } from "./Ball";
import { MegaCtx } from "../contexts/MegaCtx";


export default function Historico() {
    const { history } = useContext(MegaCtx);

    return <>
        <div>
            <h2>Histórico de Palpites:</h2>
            <ul>
                {history.map((entry, index) => (
                    <li key={index}>{entry.map((value, index) =>(
                         <Ball key={index} label={value} />))}</li>
                ))}
            </ul>
        </div>
    </>
}
