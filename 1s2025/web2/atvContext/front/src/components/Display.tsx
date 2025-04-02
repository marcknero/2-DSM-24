import { CSSProperties, useContext } from "react";
import { Ball } from "./Ball";
import { LetterCtx } from "../contexts/LetterCtx";

export function Display(){
    const {input} = useContext(LetterCtx)
    const letters:string[] = input.split('');
    return <div style={displayStyle}>
        {
        letters.length > 0 ? ( letters.map((value:string) => {
           return <Ball label={value} />
            }) ) : <label>Digite um nome</label>
        }
    </div>
}

const displayStyle: CSSProperties = {
    margin: "5px",
    padding: "4px",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "Grey",
    color:"white"
  }
