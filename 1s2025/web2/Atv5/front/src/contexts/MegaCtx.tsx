import { createContext, useEffect, useState } from "react";
import { JogosProps, LotteryContextProps, ProviderProps } from "../types";
import { getLottery } from "../services/Lottery";

export const LotteryContext = createContext({} as LotteryContextProps);

export function LotteryProvider({ children }: ProviderProps) {
    const [jogos, setJogos] = useState<JogosProps[]>([]);

    useEffect(() => {
        (async function () {
            const result = await getLottery();
            setJogos(result.jogos); // Agora jogos é um array
            console.log("context result",result)
        })();
    }, []);

    return (
        <LotteryContext.Provider value={{ jogos }}>
            {children}
        </LotteryContext.Provider>
    );
}