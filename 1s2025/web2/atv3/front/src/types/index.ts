export interface MegaCtxProps {
    history: number[][];
    addToHistory: (nros: number[]) => void;
}

export interface Props {
    children: React.ReactNode;
}

export interface BallProps {
    label: number;
}