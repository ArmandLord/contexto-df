import { useContext } from "react";
import { ThemeContext } from "../../context/theme/ThemeContext";

const Button = () => {
  const { cambiarColor } = useContext(ThemeContext);
  return (
    <div>
      <button onClick={() => cambiarColor("#17338f")}>azul</button>
      {/* <button onClick={() => cambiarColor("#778f17")}>amarillo</button>
      <button onClick={() => cambiarColor("#16b73e")}>verde</button> */}
    </div>
  );
};

export default Button;
