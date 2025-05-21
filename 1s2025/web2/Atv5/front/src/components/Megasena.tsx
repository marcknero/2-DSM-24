import { useState,useContext, useEffect } from "react";
import Display from "./Display";
import { LotteryContext } from "../contexts/MegaCtx";
import { MegaSenaContainer } from "../styles/styles";

export default function MegaSena() {
    const { jogos } = useContext(LotteryContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (jogos && jogos[0]) {
            setLoading(false);
        }
    }, [jogos]);

    return (
            <MegaSenaContainer>
                {loading ? (
                    <h2>Carregando...</h2>
                ) : (
                    <Display />
                )}
            </MegaSenaContainer>
    );
}

