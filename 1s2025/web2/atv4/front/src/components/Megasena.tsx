import { useState,useContext, useEffect } from "react";
import Display from "./Display";
import { LotteryContext } from "../contexts/MegaCtx";
import styled from "styled-components";

export default function MegaSena() {
    const { jogos } = useContext(LotteryContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (jogos && jogos.megasena) {
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

const MegaSenaContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    justify-self: center;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
`