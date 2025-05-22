import { Routes, Route } from "react-router-dom"
import MegaSena from "../components/Megasena";
import Historico from "../components/Historico";



export default function Rotas(){
    return(
        <Routes>
            <Route path='*' element={<Erro />}/>
            <Route path='/' element={<MegaSena />} />
            <Route path=':selection' element={<Historico />} />
        </Routes>
    );
}

function Erro(){
    return (<h1>Rota Inexistente</h1>);
}

