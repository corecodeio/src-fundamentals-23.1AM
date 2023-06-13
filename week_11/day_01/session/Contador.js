import React, { useState } from "react";

const Contador = ({cantidad}) => {
  //inicio el estado de numero en 0
  const [numero, setNumero] = useState(0);


  const sumar = () => {
    //contador = contador + la cantidad;
    setNumero(numero + cantidad)
  }
  const resta = () => {
    //contador = contador - la cantidad;
    setNumero(numero - cantidad)
  }
  return (
    //React.Fragment es un componente que no se renderiza, pero permite agrupar elementos
    <React.Fragment>
      <h1>{numero}</h1>
      <button onClick={sumar}>suman</button>
      <button onClick={resta}>restar</button>
    </React.Fragment>
  );
};

export default Contador;
