import { useEffect, useState } from "react";
import { MegaSenaContainer } from "../styles/styles";
import { Ball } from "./Ball";
import { DisplayContainer } from "../styles/styles";
import api from "../services/api";

export default function Historico() {
    const [selectedGame, setSelectedGame] = useState<any | null>(null);
    const [notFound, setNotFound] = useState(false);
    const [options, setOptions] = useState<number[]>([]);
    const [currentConcurso, setCurrentConcurso] = useState<string>("");

    useEffect(() => {
        const fetchOptions = async () => {
            try {
                const response = await api.get("/concursos");
                const concursos = response.data.map((item: any) => item.concurso);
                setOptions(concursos);
                
                // Seleciona o concurso mais recente (ou o primeiro disponível)
                if (concursos.length > 0) {
                    const latestConcurso = concursos[0].toString();
                    setCurrentConcurso(latestConcurso);
                    fetchConcurso(latestConcurso);
                }
            } catch (error) {
                console.error("Erro ao buscar concursos:", error);
            }
        };
        
        fetchOptions();
    }, []);

    const fetchConcurso = async (concursoId: string) => {
        setSelectedGame(null);
        setNotFound(false);
        
        try {
            const response = await api.get(`${concursoId}`);
            console.log(response.data);
            if (response.data) {
                setSelectedGame(response.data[0]);
            } else {
                setTimeout(() => setNotFound(true), 2000);
            }
        } catch (error) {
            console.error(`Erro ao buscar concurso ${concursoId}:`, error);
            setTimeout(() => setNotFound(true), 2000);
        }
    };

    const handleConcursoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const concursoId = e.target.value;
        setCurrentConcurso(concursoId);
        fetchConcurso(concursoId);
    };

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
                                <select 
                                    id="opcoes" 
                                    name="opcoes" 
                                    value={currentConcurso}
                                    onChange={handleConcursoChange}
                                >
                                    {options.map((op, index) => (
                                        <option key={index} value={`${op}`}>
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