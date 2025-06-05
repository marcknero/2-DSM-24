import type { CidadesProps } from "../types";
import api from "./api";


export async function getCidadeSelecionada(selection?: string): Promise<CidadesProps> {
    await delay(2000);
    const endpoint = selection ? `/cidade/${selection}` : "/";
    const { data } = await api.get(endpoint);
    return  data 
}
export async function getCidades(selection?: string): Promise<CidadesProps> {
    await delay(2000);
    const endpoint = "/cidade";
    const { data } = await api.get(endpoint);
    return  data 
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));