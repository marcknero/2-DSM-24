import fs from 'fs';
import path from 'path';

export function processText(text: string): Record<string, number> {
    // Converter para minúsculo e remover pontuação
    const cleanText = text
        .toLowerCase()
        .replace(/[.,!?;:()\[\]{}"'-]/g, '')
        .replace(/\s+/g, ' ');

    const words = cleanText.split(' ').filter(Boolean);

    const frequencies: Record<string, number> = {};
    for (const word of words) {
        frequencies[word] = (frequencies[word] || 0) + 1;
    }
    return frequencies;
}