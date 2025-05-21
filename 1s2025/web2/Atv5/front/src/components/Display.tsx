import { useContext } from "react";
import { LotteryContext } from "../contexts/MegaCtx";
import { Ball } from "./Ball";
import { DisplayContainer } from "../styles/styles";

export default function Display() {
    const { jogos } = useContext(LotteryContext)
    return (
        <DisplayContainer>
            <h2>Resultado Mega-Sena</h2>
            <h3>Concurso: {jogos[0].concurso.toString()}</h3>
            <Ball label={jogos[0].bola1.toString()} />
            <Ball label={jogos[0].bola2.toString()} />
            <Ball label={jogos[0].bola3.toString()} />
            <Ball label={jogos[0].bola4.toString()} />
            <Ball label={jogos[0].bola5.toString()} />
            <Ball label={jogos[0].bola6.toString()} />
        </DisplayContainer>
    )
}
