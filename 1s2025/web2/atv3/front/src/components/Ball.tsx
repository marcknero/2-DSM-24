import { CSSProperties } from "react";
import { BallProps } from "../types";
export function Ball({ label }: BallProps) {
    return <>
        <button style={ballStyle}>{label}</button>
    </>
}


const ballStyle: CSSProperties = {
    backgroundColor: "rgba(35, 187, 29, 0.88)",
    color: "white",
    padding: "5px 10px",
    marginRight: "10px",
    fontSize: "20px",
    fontWeight: "bold",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
    display: "flex", // flexbox para alinhamento
    alignItems: "center", // alinha ícone e texto verticalmente
    gap: "8px", // espaçamento entre ícone e texto
};