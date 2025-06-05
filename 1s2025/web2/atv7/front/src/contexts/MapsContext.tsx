import React, { createContext, useState, useEffect } from "react";
import type { CidadeProps, MapsContextProps,CidadesProps } from "../types";
import { getCidades, getCidadeSelecionada } from "../services/maps";

export const MapsContext = createContext({} as MapsContextProps);

export function MapsProvider({ children }: { children: React.ReactNode }) {
  const [cidades, setCidades] = useState<CidadesProps[]>([]);
  const [cidadeSelecionada, setCidadeSelecionada] = useState<CidadeProps | null>(null);

useEffect(()=>{
  fetchList();
},[cidades])

 useEffect(()=> {
  fetchCidades();
 }, [cidadeSelecionada]);
 
 async function fetchCidades(selection?:string){
  const result = await getCidadeSelecionada(selection); 
  // If result is an array, pick the first element or null
  setCidadeSelecionada(result && Array.isArray(result) ? result[0] ?? null : result ?? null);
 }
 async function fetchList(){
  const result = await getCidades();
  setCidades(Array.isArray(result) ? result : [result]);
 }
  return (
    <MapsContext.Provider value={{ cidades, cidadeSelecionada }}>
      {children}
    </MapsContext.Provider>
  );
}