import { BrowserRouter } from 'react-router'
import { Header } from "./components/Header"
import { LotteryProvider } from './contexts/MegaCtx'
import Rotas from "./routes/rotas"
import { ThemeBtn } from './components/ThemeBtn'
import { ThemeProvider } from './contexts/ThemeCtx'
import { createGlobalStyle } from 'styled-components';



export default function App() {
  return (
    <LotteryProvider>
      <GlobalStyle />
      <ThemeProvider >
        <BrowserRouter>
          <Header />
          <Rotas />
          <ThemeBtn />
        </BrowserRouter>
      </ThemeProvider>
    </LotteryProvider>
  );
}


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-color:rgb(199, 194, 194);
    color: #333;
  }
`