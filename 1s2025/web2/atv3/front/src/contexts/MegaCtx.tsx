import React, { createContext, useState } from "react";
import { MegaCtxProps } from "../types";

const MegaCtx = createContext<MegaCtxProps>({} as MegaCtxProps);

function MegaCtxProvider({ children }: { children: React.ReactNode }) {
    const [history, setHistory] = useState<number[][]>([]);

    function addToHistory(nros: number[]) {
        setHistory((history) => [...history, nros]);
    }

    return (
        <MegaCtx.Provider value={{ history, addToHistory }}>
            {children}
        </MegaCtx.Provider>
    );
};

export { MegaCtx, MegaCtxProvider };