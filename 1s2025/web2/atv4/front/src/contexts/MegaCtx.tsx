import { createContext, useEffect, useState } from "react";
import { LotteryContextProps, Props, ProviderProps } from "../types";
import { getLottery } from "../services/Lottery";

export const LotteryContext = createContext({} as LotteryContextProps);

export function LotteryProvider({ children }: ProviderProps) {
    const [jogo, setJogo] = useState<Props | undefined>();
    useEffect(() => {
        (async function () {
            const result = await getLottery();
            if ("megasena" in result) {
                setJogo(result.jogo);
            }
            console.log("result", result.jogo)
        })();
    }, []);
    return (
        <LotteryContext.Provider value={{ jogo }}>
            {children}
        </LotteryContext.Provider>
    );
}