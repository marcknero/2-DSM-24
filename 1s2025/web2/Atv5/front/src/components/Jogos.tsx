import { useContext, useState } from "react";
import { LotteryContext } from "../contexts/MegaCtx";
import { Buttons, MegaSenaContainer } from "../styles/styles"; // Importa os estilos dos botões
import { Ball } from "./Ball";

export default function Jogos() {
    const { jogos } = useContext(LotteryContext); // Obtém os jogos do contexto
    const [selectedGame, setSelectedGame] = useState<string | null>(null); // Estado para o jogo selecionado

    const handleGameClick = (gameKey: string) => {
        setSelectedGame(gameKey); // Define o jogo selecionado
    };

    return (
        <MegaSenaContainer>
            <h1>Jogos</h1>
            <div>
                {/* Renderiza um botão para cada jogo */}
                {Object.keys(jogos).filter((gameKey) => gameKey.toLowerCase() !== "loteca").map((gameKey) => (
                    <Buttons
                        key={gameKey}
                        onClick={() => handleGameClick(gameKey)}>
                        {gameKey}
                    </Buttons>
                ))}
            </div>
            {/* Exibe os resultados do jogo selecionado */}
            {selectedGame && (
                <div>
                    <h2>Resultado {selectedGame}:</h2>
                    <h3>Concurso: {jogos[selectedGame].numeroDoConcurso}</h3>
                    {jogos[selectedGame].dezenas.map((dezena: string, index: number) => (
                        <Ball key={index} label={dezena} />
                    ))}
                </div>
            )}
        </MegaSenaContainer>
    );
}