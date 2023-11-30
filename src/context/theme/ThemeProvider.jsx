import { useState } from "react";
import { ThemeContext } from "./ThemeContext";

// 2. Proveer el contexto
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const cambiarColor = (color) => {
    setTheme(color);
  };

  const value = {
    // estado
    theme,
    // metodos
    cambiarColor,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
