import { BallProps } from "../types";
import { ballStyle } from "../styles";
export function Ball({ label }: BallProps) {
    return <>
        <button style={ballStyle}>{label}</button>
    </>
}


