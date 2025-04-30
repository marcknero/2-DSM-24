import React from "react";

export interface MegaCtxProps {
    history: number[][];
    addToHistory: (nros: number[]) => void;
}

export interface Props {
    acumulado: boolean;
    concursoEspecial: boolean;
    dataApuracao: string;
    dataPorExtenso: string;
    dataProximoConcurso: string;
    dezenas: string[];
    numeroDoConcurso: number;
    quantidadeGanhadores: number;
    tipoPublicacao: number;
    tipoJogo: string;
    valorEstimadoProximoConcurso: number;
    valorPremio: number;

}

export interface BallProps {
    label: number;
}

export interface LotteryContextProps {
    jogo: Props | undefined;
}
export interface LotteryProps {
    jogo: Props;
}

export interface ProviderProps {
    children: React.ReactNode;
}

export interface ThemeContextProps {
    darkTheme: boolean;
    changeTheme: () => void;
}