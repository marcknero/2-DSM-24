import { useContext } from "react";
import { LetterCtx } from "../contexts/LetterCtx";

export function Input(){
    const {input, setInput} = useContext(LetterCtx)
    return (        
            <input 
            type="text" 
            value={input} 
            onChange={ (e) => setInput(e.target.value)}
            />    
    );
}