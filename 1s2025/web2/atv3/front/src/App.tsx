import './App.css'
import { Header } from "./components/header"
import { MegaCtxProvider } from './contexts/MegaCtx'
import Rotas from "./routes/rotas"

function App() {
  return (
    <>
      <MegaCtxProvider>
            <Header />
            <Rotas />
      </MegaCtxProvider>
    </>
  )
}

export default App
