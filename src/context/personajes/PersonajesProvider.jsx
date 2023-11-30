import axios from "axios";
import { PersonajesContext } from "./PersonajesContext";
import { useEffect, useState } from "react";

const personajesApi = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});

const PersonajesProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const { data } = await personajesApi("/character");
    setData(data.results);
  };

  useEffect(() => {
    getData();
  }, []);

  const value = {
    data,
  };
  return (
    <PersonajesContext.Provider value={value}>
      {children}
    </PersonajesContext.Provider>
  );
};

export default PersonajesProvider;
