import { Routes,Route,Navigate } from "react-router-dom"
import Historico from "../components/Historico"
import Palpite from "../components/Palpite"


export default function Rotas(){
    return(
        <Routes>
            <Route path='*' element={<Erro />}/>
            <Route path="/" element={<Navigate to="/palpite" replace />} />
            <Route path='/palpite' element={<Palpite />} />
            <Route path='/historico' element={<Historico />} />
        </Routes>
    )
}

function Erro(){
    return (
        <div>
            <h1>Rota Inexistente</h1>
        </div>
    )
}
