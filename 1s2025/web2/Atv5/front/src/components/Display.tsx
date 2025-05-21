import { useContext } from "react";
import { LotteryContext } from "../contexts/MegaCtx";
import { Ball } from "./Ball";
import { DisplayContainer } from "../styles/styles";

export default function Display() {
    const { jogos } = useContext(LotteryContext)
    return (
        <DisplayContainer >
            <h2>Resultado Mega-Sena</h2>
            <h3>Concurso: {jogos?.row.concurso}</h3>
            <Ball label={jogos?.row.bola1.toString()} />
            <Ball label={jogos?.row.bola2.toString()} />
            <Ball label={jogos?.row.bola3.toString()} />
            <Ball label={jogos?.row.bola4.toString()} />
            <Ball label={jogos?.row.bola5.toString()} />
            <Ball label={jogos?.row.bola6.toString()} />
        </DisplayContainer>
    )
}
