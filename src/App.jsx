import { useContext } from "react";
import { ThemeContext } from "./context/theme/ThemeContext";
import { PersonajesContext } from "./context/personajes/PersonajesContext";
import Button from "./components/button";

const App = () => {
  // 4.
  const { theme } = useContext(ThemeContext);
  const { data } = useContext(PersonajesContext);
  console.log("data: ", data);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        background: theme === "dark" ? "#000" : theme,
      }}
    >
      {theme}
      <Button />

      {data.map((item) => (
        <h1 key={item.id}>{item.name}</h1>
      ))}
    </div>
  );
};

export default App;
