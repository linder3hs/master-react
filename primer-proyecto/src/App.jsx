import { useState } from "react";
import { Header, Footer } from "./components";

export default function App() {
  const [name, setName] = useState("Pepe Zapata");

  const handleButtonClick = () => {
    setName("Juan Perez");
    console.log("Hola soy una funcion");
  };

  const grettins = (name, lastname) => {
    // tempalte string `Hola ${name}`
    // `` : backticks
    console.log(`Hola me llamo ${name} ${lastname}`);
  };

  return (
    <>
      <Header
        title="Haciendo una web en react"
        text="Este es un esto para el header"
      />
      <h1>Mi primer componente {name}</h1>
      <button onClick={handleButtonClick}>Cambiar nombre</button>
      <button onClick={() => grettins("Pepe", "Zapata")}>
        Funcion con parametros
      </button>
      <Footer />
    </>
  );
}
