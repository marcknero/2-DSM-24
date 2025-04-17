import { CSSProperties } from "react";

export const pageStyle: CSSProperties = {
    backgroundColor: "rgba(0,0,0,0.4)",
    minHeight: "100vh", 
    width :"100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    margin: "0",
    padding: "0",
};

export const contentStyle: CSSProperties = {
    marginTop: "20px", 
    width: "80%",  
    backgroundColor: "rgba(0,0,0,0.2)", 
    borderRadius: "8px", 
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", 
    padding: "20px", 
    textAlign: "center", 
};