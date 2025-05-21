import { useContext, useState } from "react";
import { LotteryContext } from "../contexts/MegaCtx";
import { Buttons, MegaSenaContainer } from "../styles/styles";
import { Ball } from "./Ball";
import { DisplayContainer } from "../styles/styles";

export default function Historico() {
    const { jogos } = useContext(LotteryContext); // Agora jogos é um array
    const [selectedGame, setSelectedGame] = useState<number|null>(null);

    const handleGameClick = (concurso: number) => {
        setSelectedGame(concurso);
    };

    return (
        <MegaSenaContainer>
            <h1>Jogos</h1>
            
            <div>
                { selectedGame !== null ? 
                        <DisplayContainer>
                            <h3>Concurso: {jogos[selectedGame].bola1.toString()}</h3>
                            <Ball label={jogos[selectedGame].bola1.toString()} />
                            <Ball label={jogos[selectedGame].bola2.toString()} />
                            <Ball label={jogos[selectedGame].bola3.toString()} />
                            <Ball label={jogos[selectedGame].bola4.toString()} />
                            <Ball label={jogos[selectedGame].bola5.toString()} />
                            <Ball label={jogos[selectedGame].bola6.toString()} />
                        </DisplayContainer> : "Selecione um dos concursos abaixo"}                        
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