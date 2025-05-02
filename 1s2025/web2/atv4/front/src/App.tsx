import { ThemeProvider } from './contexts/ThemeCtx';
import {ThemedApp} from './components/ThemedApp';
import { LotteryProvider } from './contexts/MegaCtx';

export default function App() {
  return (
    <LotteryProvider>
      <ThemeProvider>
        <ThemedApp />
      </ThemeProvider>
    </LotteryProvider>
  );
}
