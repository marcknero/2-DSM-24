import { useState } from 'react';

export function useTheme() {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => setDarkTheme((prev) => !prev);

  return { darkTheme, toggleTheme };
}
