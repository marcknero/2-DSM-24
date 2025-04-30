import { useState,useContext, useEffect } from "react";
import Display from "./Display";
import { LotteryContext } from "../contexts/MegaCtx";

export default function MegaSena() {
    const { jogos } = useContext(LotteryContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (jogos && jogos.megasena) {
            setLoading(false);
        }
    }, [jogos]);

    return (
        <>
            <div>
                {loading ? (
                    <h2>Carregando...</h2>
                ) : (
                    <Display />
                )}
            </div>
        </>
    );
}
