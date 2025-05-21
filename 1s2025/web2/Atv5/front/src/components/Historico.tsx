import { useContext, useState } from "react";
import { LotteryContext } from "../contexts/MegaCtx";
import { Buttons, MegaSenaContainer } from "../styles/styles";
import { Ball } from "./Ball";
import { DisplayContainer } from "../styles/styles";
import { JogosProps } from "../types";

export default function Historico() {
    const { jogos } = useContext(LotteryContext); // Agora jogos é um array
    const [selectedGame, setSelectedGame] = useState<any | null>(null);

    const handleGameClick = (jogo: any) => {
        setSelectedGame(jogo);
    };

    return (
        <MegaSenaContainer>
            <h1>Jogos</h1>

            <div>
                {selectedGame !== null ?
                    <DisplayContainer>
                        <h2>Resultado Mega-Sena</h2>
                        <h3>Concurso: {selectedGame.concurso.toString()}</h3>
                        <Ball label={selectedGame.bola1.toString()} />
                        <Ball label={selectedGame.bola2.toString()} />
                        <Ball label={selectedGame.bola3.toString()} />
                        <Ball label={selectedGame.bola4.toString()} />
                        <Ball label={selectedGame.bola5.toString()} />
                        <Ball label={selectedGame.bola6.toString()} />
                    </DisplayContainer>
                    :
                    "Selecione um dos concursos abaixo"}
            </div>
            <div>
                {/* Renderiza um botão para cada jogo */}
                {jogos.map((jogo: any) => (
                    <Buttons
                        key={jogo.concurso}
                        onClick={() => handleGameClick(jogo)}>
                        {jogo.concurso}
                    </Buttons>
                ))}
            </div>
        </MegaSenaContainer>
    );
}