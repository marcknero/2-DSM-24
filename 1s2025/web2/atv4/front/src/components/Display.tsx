import { useContext } from "react";
import { LotteryContext } from "../contexts/MegaCtx";
import { Ball } from "./Ball";
import styled from "styled-components";


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
const DisplayContainer = styled.div`
    justify-content: center;
    justify-self: center;
    align-items: center;
    text-align: center;
    padding: 5px;
    border-radius: 5px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    margin-bottom: 8px;
    gap: px;
    &:hover {
    cursor: default;
    }
  `