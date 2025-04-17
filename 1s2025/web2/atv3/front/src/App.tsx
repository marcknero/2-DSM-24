import { BrowserRouter } from 'react-router'
import { Header } from "./components/Header"
import { MegaCtxProvider } from './contexts/MegaCtx'
import Rotas from "./routes/rotas"
import { contentStyle, pageStyle } from './styles/appStyle'

function App() {
  return (
    <>
      <MegaCtxProvider>
        <div style={pageStyle}>
          <BrowserRouter>
            <Header />
            <div style={contentStyle}>
            <Rotas />
            </div>
          </BrowserRouter>
        </div>
      </MegaCtxProvider>

    </>
  )
}

export default App
