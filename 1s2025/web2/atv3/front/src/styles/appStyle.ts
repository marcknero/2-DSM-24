import { CSSProperties } from "react";

export const pageStyle: CSSProperties = {
    backgroundColor: "rgba(0,0,0,0.4)", // Fundo cinza claro
    minHeight: "100vh", // Altura mínima da página
    width :"100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    margin: "0",
    padding: "0",
};

export const contentStyle: CSSProperties = {
    marginTop: "20px", // Espaçamento abaixo do header
    width: "80%", // Largura do quadrado
    maxWidth: "600px", // Largura máxima
    backgroundColor: "rgba(0,0,0,0.5)", // Fundo branco
    borderRadius: "8px", // Bordas arredondadas
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Sombra para destaque
    padding: "20px", // Espaçamento interno
    textAlign: "center", // Centralizar texto
};