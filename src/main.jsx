import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./context/theme/ThemeProvider.jsx";
import PersonajesProvider from "./context/personajes/PersonajesProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* 3. Consumir el contexto */}
    <ThemeProvider>
      <PersonajesProvider>
        <App />
      </PersonajesProvider>
    </ThemeProvider>
  </React.StrictMode>
);
