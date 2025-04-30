import React from "react";

export interface MegaCtxProps {
    history: number[][];
    addToHistory: (nros: number[]) => void;
}

export interface JogosProps{
    [key:string]:Props;
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
    label: string;
}

export interface LotteryContextProps {
    jogos: JogosProps;
}
export interface LotteryProps {
    jogos: JogosProps;
}

export interface ProviderProps {
    children: React.ReactNode;
}

export interface ThemeContextProps {
    darkTheme: boolean;
    changeTheme: () => void;
}

export interface DisplayProps {
    jogo: Props;
}