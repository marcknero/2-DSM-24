import { useContext, useState } from "react";
import { MegaCtx } from "../contexts/MegaCtx";
import { Ball } from "./Ball";
import { displayStyle } from "../styles/displayStyle";

export default function Display() {
    const { addToHistory } = useContext(MegaCtx);
    const [sorted, setSorted] = useState<number[]>([]);

    function raffle() {
        let nros: number[] = [];
        let nro: number | null = null;
        for (let i: number = 0; i <= 5; i++) {
            nro = Math.floor(Math.random() * 60+1);
            if (nro in nros || nro === 61) {
                i--
            } else {
                nros.push(nro);
            }
        }
        nros = nros.sort((a:number,b:number)=> a - b);
        setSorted(nros);
        addToHistory(nros);
    }
    return <>
        <div>
            <h2>Palpite para Mega-sena:</h2>
            <div style={displayStyle}>
                {sorted.map((num, index) => (
                    <Ball key={index} label={num} />
                ))}
            </div>
            <button onClick={raffle}>Gerar Números</button>
        </div>
    </>
}