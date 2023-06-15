import React, { useEffect, useState } from "react";

const CodeSessionThree = () => {
  const [numero, setNumero] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const sumar = () => {
    setNumero(numero + 1);
  };
  const restar = () => {
    setNumero2(numero2 + 1);
  };
  //useFfect con array de dependencias vacio [] se ejecte una sola ves
  useEffect(() => {
    console.log("start");
    //se ejecuta cuando el componente se destruye o desapasrece
    return () => {
      console.log("end");
    }
  }, []);
  //sin array de dependencia se ejecuta siempre que alla un cambio
  useEffect(() => {
    console.log("cualquier cambio de estado");
  });
  //si hya dependencia se ejecuta cuando hay un cambio solo en esa dependencias
  useEffect(() => {
    console.log("solo cambios de numero");
  }, [numero]);

  return (
    <div>
      <h1>{numero}</h1>
      <button onClick={sumar}>sumar</button>
      <h2>{numero2}</h2>
      <button onClick={restar}>restar</button>
    </div>
  );
};

export default CodeSessionThree;
