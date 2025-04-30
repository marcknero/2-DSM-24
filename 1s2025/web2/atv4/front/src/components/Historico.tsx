import { useContext } from "react";
import { Ball } from "./Ball";
import { LotteryContext } from "../contexts/MegaCtx";
import { displayStyle } from "../styles/index";



export default function Historico() {
    const { data } = useContext(LotteryContext);

    return <>
        <div >
            <h2>Outros Jogos:</h2>
            <ul >
                {history.map((entry, index) => (
                    <li style={displayStyle} key={index}>{entry.map((value, index) =>(
                         <Ball key={index} label={value} />))}</li>
                ))}
            </ul>
        </div>
    </>
}
