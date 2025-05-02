import { useContext } from "react";
import { LotteryContext } from "../contexts/MegaCtx";
import { Ball } from "./Ball";
import { DisplayContainer } from "../styles/styles";

export default function Display() {
    const { jogos } = useContext(LotteryContext)
    return (
        <DisplayContainer >
            <h2>Resultado Mega-Sena</h2>
            <h3>Concurso: {jogos?.megasena.numeroDoConcurso}</h3>
            {jogos?.megasena.dezenas.map((dezena, index) => (
                <Ball key={index} label={dezena} />
            ))}
        </DisplayContainer>
    )
}
