import { LotteryProps } from "../types";
import api from "./api";

export async function getLottery(selection?: string): Promise<LotteryProps> {
    await delay(2000);
    const endpoint = selection ? `/${selection}` : "/";
    const { data } = await api.get(endpoint);
    return { jogos: data };
}


// Função para criar um delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
