import { useState } from "react";
import Display from "./Display";


export default function Palpite() {
    const [showDisplay, setShowDisplay] = useState<boolean>(false);

    return <>
        <div>
            {!showDisplay && (
                <button onClick={() => setShowDisplay(true)}>
                    Clique para Começar
                </button>
            )}
            {showDisplay && <Display />}
        </div>
    </>
}
