import { BrowserRouter } from 'react-router';
import { Header } from "./components/Header";
import { LotteryProvider } from './contexts/MegaCtx';
import Rotas from "./routes/rotas";
import { ThemeBtn } from './components/ThemeBtn';
import { ThemeProvider as StyledThemeProvider, createGlobalStyle } from 'styled-components';
import { ThemeProvider, useTheme } from './contexts/ThemeCtx';
import { LightTheme, DarkTheme } from './styles/styles';

export default function App() {
  return (
    <LotteryProvider>
      <ThemeProvider>
        <ThemedApp />
      </ThemeProvider>
    </LotteryProvider>
  );
}

function ThemedApp() {
  const { darkTheme } = useTheme();
  const theme = darkTheme ? DarkTheme : LightTheme;

  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Rotas />
        <ThemeBtn />
      </BrowserRouter>
    </StyledThemeProvider>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
  }
`;