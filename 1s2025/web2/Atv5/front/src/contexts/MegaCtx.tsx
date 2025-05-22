import { createContext, useEffect, useState } from "react";
import { JogosProps, LotteryContextProps, ProviderProps } from "../types";
import { getLottery } from "../services/Lottery";

export const LotteryContext = createContext({} as LotteryContextProps);

export function LotteryProvider({ children }: ProviderProps) {
    const [jogos, setJogos] = useState<JogosProps[]>([]);

    // Busca o último concurso ao iniciar
    useEffect(() => {
        fetchJogos();
    }, []);

    // Função para buscar concursos (último ou específico)
    async function fetchJogos(selection?: string) {
        const result = await getLottery(selection);
        setJogos(result.jogos);
    }

    return (
        <LotteryContext.Provider value={{ jogos, fetchJogos }}>
            {children}
        </LotteryContext.Provider>
    );
}