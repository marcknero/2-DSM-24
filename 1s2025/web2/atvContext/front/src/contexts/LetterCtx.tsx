import { createContext, useState } from "react";
import { LetterCtxProps, Props } from "../types";

const LetterCtx = createContext<LetterCtxProps>({} as LetterCtxProps);

function LetterCtxProvider({ children }: Props) {
  const [input, setInput] = useState<string>("");
  return (
    <LetterCtx.Provider value={{input, setInput }}>
      {children}
    </LetterCtx.Provider>
  );
};

export {LetterCtx,LetterCtxProvider};