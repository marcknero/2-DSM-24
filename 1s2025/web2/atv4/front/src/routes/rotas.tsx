import { Routes,Route,Navigate } from "react-router-dom"
import Jogos from "../components/Jogos"
import Megasena from "../components/Megasena"


export default function Rotas(){
    return(
        <Routes>
            <Route path='*' element={<Erro />}/>
            <Route path="/" element={<Navigate to="/megasena" replace />} />
            <Route path='/megasena' element={<Megasena />} />
            <Route path='/jogos' element={<Jogos />} />
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
