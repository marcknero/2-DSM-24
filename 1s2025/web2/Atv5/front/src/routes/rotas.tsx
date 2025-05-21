import { Routes,Route,Navigate } from "react-router-dom"
import MegaSena from "../components/Megasena";
import Historico from "../components/Historico";



export default function Rotas(){
    return(
        <Routes>
            <Route path='*' element={<Erro />}/>
            <Route path="/" element={<Navigate to="/megasena" replace />} />
            <Route path='/megasena' element={<MegaSena />} />
            <Route path='/historico' element={<Historico />} />
        </Routes>
    );
}

function Erro(){
    return (<h1>Rota Inexistente</h1>);
}

