import { useContext, useState } from "react";
import { LotteryContext } from "../contexts/MegaCtx";
import { Ball } from "./Ball";
import { displayStyle } from "../styles/index";

export default function Display() {
    
    return <>
        <div>
            <h2>Resultado Mega-Sena:</h2>
            <div style={displayStyle}>
                {sorted.map((num, index) => (
                    <Ball key={index} label={num} />
                ))}
            </div>

        </div>
    </>
}