import { createContext, useEffect, useState } from "react";
import { JogosProps, LotteryContextProps, ProviderProps } from "../types";
import { getLottery } from "../services/Lottery";

export const LotteryContext = createContext({} as LotteryContextProps);

export function LotteryProvider({ children }: ProviderProps) {
    const [jogos, setJogos] = useState<JogosProps>({}); //iniciei com objeto vazio par evitar erro de assinatura

    useEffect(() => {
        (async function () {
            const result = await getLottery();
            setJogos(result.jogos);
            console.log("result", result.jogos)
        })();
    }, []);

    return (
        <LotteryContext.Provider value={{ jogos }}>
            {children}
        </LotteryContext.Provider>
    );
}