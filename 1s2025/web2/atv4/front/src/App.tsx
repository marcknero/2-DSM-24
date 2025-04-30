import { BrowserRouter } from 'react-router'
import { Header } from "./components/Header"
import { LotteryProvider } from './contexts/MegaCtx'
import Rotas from "./routes/rotas"
import { ThemeBtn } from './components/ThemeBtn'
import { ThemeProvider } from './contexts/ThemeCtx'

function App() {
  return (
    <>
    <ThemeProvider >
      <LotteryProvider>
          <BrowserRouter>
            <Header />
            <Rotas />
            <ThemeBtn />
          </BrowserRouter>
      </LotteryProvider>
      </ThemeProvider>

    </>
  )
}

export default App
