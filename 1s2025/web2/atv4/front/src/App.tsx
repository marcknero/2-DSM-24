import { BrowserRouter, Route } from 'react-router'
import { Header } from "./components/Header"
import { LotteryProvider } from './contexts/MegaCtx'
import Rotas from "./routes/rotas"
import { contentStyle, pageStyle } from './styles/index'
import { ThemeBtn } from './components/ThemeBtn'
function App() {
  return (
    <>
      <LotteryProvider>
          <BrowserRouter>
            <Header />
            <Rotas />
            <ThemeBtn />
          </BrowserRouter>
      </LotteryProvider>

    </>
  )
}

export default App
