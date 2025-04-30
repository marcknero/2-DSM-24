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


//header
export const headerStyle: CSSProperties = {
display: "flex",
width:"100%",
justifyContent: "space-between",
alignItems: "flex-end",
padding:"0px",
backgroundColor: "rgba(0, 0, 0, 0.4)",
boxShadow:"1px 5px 5px rgba(0,0,0,0.2)",
margin:"2px",
borderRadius:"15px"
}

export const logoStyle: CSSProperties={
    padding:"10px",
    textAlign:"end",
    textDecoration:"none",
    lineHeight:"0",
}

export const menuStyle: CSSProperties={
    padding:"20px",
    paddingRight: "40px",
    textAlign:"end",
    color:"black",
    textDecoration:"none"
}


    //display
export const displayStyle: CSSProperties = {
    display: "flex", 
    flexWrap: "wrap", 
    gap: "2px", 
    justifyContent: "center", 
    alignItems: "center", 
    padding: "5px", 
    borderRadius: "8px", 
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)", 
    marginBottom:"8px"
};  


//ball
export const ballStyle: CSSProperties = {
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