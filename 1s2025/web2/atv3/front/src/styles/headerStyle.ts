import { CSSProperties } from "react";

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