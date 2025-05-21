import { BrowserRouter } from 'react-router';
import { Header } from '../components/Header';
import Rotas from "../routes/rotas";
import { ThemeBtn } from '../components/ThemeBtn';
import { useTheme } from '../contexts/ThemeCtx';
import { createGlobalStyle, ThemeProvider as StyledThemeProvider } from 'styled-components';
import { DarkTheme, LightTheme } from '../styles/styles';


export function ThemedApp() {
    const { isDarkTheme } = useTheme();
    const tema = isDarkTheme ? DarkTheme : LightTheme;
  
    return (
      <StyledThemeProvider theme={tema}>
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