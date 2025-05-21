import React from "react";
import 'styled-components'
export interface MegaCtxProps {
    history: number[][];
    addToHistory: (nros: number[]) => void;
}

export interface JogosProps {
    row: Props;

}


export interface Props {
    acumulado_6_acertos:string;
    acumulado_sorteio_especial_mega_da_virada:string;
    arrecadacao_total:string;
    bola1:number;
    bola2:number;
    bola3:number;
    bola4:number;
    bola5:number;
    bola6:number;
    cidade_uf:string;
    concurso:number;
    data_do_sorteio:string;
    estimativa_premio:string;
    ganhadores_4_acertos:number;
    ganhadores_5_acertos:number;
    ganhadores_6_acertos:number;
    observacao:null;
    rateio_4_acertos:string;
    rateio_5_acertos:string;
    rateio_6_acertos:string;
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
    isDarkTheme: boolean;
    changeTheme: () => void;
}

export interface DisplayProps {
    jogo: Props;
}


declare module 'styled-components' {
    export interface DefaultTheme {
        background: string;
        color: string;
    }
}