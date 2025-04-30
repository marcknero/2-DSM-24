import { styles } from "../styles/styles";
import { BallProps } from "../types";
export function Ball({ label }: BallProps) {
    return <>
        <button style={styles.ball}>{label}</button>
    </>
}


