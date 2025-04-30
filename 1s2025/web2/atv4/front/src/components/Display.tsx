import { useContext } from "react";
import { LotteryContext } from "../contexts/MegaCtx";
import { Ball } from "./Ball";
import { styles } from "../styles/styles";

export default function Display() {
    const { jogos } = useContext(LotteryContext)
    return <>
        <div style={styles.display}>
            <div>
                <h2>Resultado Mega-Sena:</h2>
            </div>
            <div>
                <h3>Concurso: {jogos?.megasena.numeroDoConcurso}</h3>
            </div>
            <div>
                {jogos?.megasena.dezenas.map((dezena, index) => (
                    <Ball key={index} label={dezena} />
                ))}
            </div>

        </div>
    </>
}