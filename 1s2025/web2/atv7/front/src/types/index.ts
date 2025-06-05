import type React from "react"

export interface CidadeProps {    
    id: number ,
    lon: number ,
    lat: number ,
    anual: number ,
    jan: number ,
    fev: number ,
    mar: number ,
    abr: number ,
    mai: number ,
    jun: number ,
    jul: number ,
    ago: number ,
    set: number ,
    out: number ,
    nov: number ,
    dez: number ,
    geom: string 
    
  }

  export interface CidadesProps{
    id:number,
    nome: string,
    geom: string
  }


  export interface MapsContextProps{
    cidades: CidadesProps[];
    cidadeSelecionada: CidadeProps | null;
  }

