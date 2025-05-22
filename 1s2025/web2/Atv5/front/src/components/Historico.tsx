import { useEffect, useState } from "react";
import { MegaSenaContainer } from "../styles/styles";
import { Ball } from "./Ball";
import { DisplayContainer } from "../styles/styles";
import { useParams } from "react-router";
import { getLottery } from "../services/Lottery";
import api from "../services/api";

export default function Historico() {
    const { selection } = useParams();
    const [selectedGame, setSelectedGame] = useState<any | null>(null);
    const [notFound, setNotFound] = useState(false);
    const [options, setOptions] = useState<number[]>([]);

    useEffect(() => {
        setSelectedGame(null);
        setNotFound(false);
        async function fetchConcurso() {
            if (selection) {
                const result = await getLottery(selection);
                if (result.jogos[0]) {
                    setSelectedGame(result.jogos[0]);
                } else {
                    setTimeout(() => setNotFound(true), 2000);
                }
            }
            console.log("rodando useEffect")
        }
        fetchConcurso();
    }, [selection]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await api.get("/concursos");
            // console.log(response.data);
            setOptions(response.data.map((item: any) => item.concurso));
        };
        fetchData();
    }, []);

    return (
        <MegaSenaContainer>
            <h1>Jogos</h1>
            <div>
                {selectedGame ?
                    <DisplayContainer>
                        <h2>Resultado Mega-Sena</h2>
                        <h3>Concurso:
                            <div>
                                <label htmlFor="opcoes">Escolha uma opção:</label>
                                <select id="opcoes" name="opcoes" onChange={async (e) => {
                                    const result = await getLottery(e.target.value);
                                    if (result.jogos[0]) {
                                        setSelectedGame(result.jogos[0]);
                                    } else {
                                        setTimeout(() => setNotFound(true), 2000);
                                    }
                                }}>
                                    {options.map((op, index) => (
                                        <option key={index} value={`${op}`}  >
                                            {op}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </h3>
                        <Ball label={selectedGame.bola1} />
                        <Ball label={selectedGame.bola2} />
                        <Ball label={selectedGame.bola3} />
                        <Ball label={selectedGame.bola4} />
                        <Ball label={selectedGame.bola5} />
                        <Ball label={selectedGame.bola6} />
                    </DisplayContainer>
                    : notFound ? (
                        "Concurso inexistente"
                    ) : (
                        "Carregando..."
                    )}
            </div>
        </MegaSenaContainer>
    );
}




