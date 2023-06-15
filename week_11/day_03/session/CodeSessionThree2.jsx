import React, { useEffect, useState } from "react";

const CodeSessionThree2 = () => {
  //crear un estado para guardar la lista
  const [list, setList] = useState([]);
  //crear un estado para guardar el numero de pagina
  const [page, setPage] = useState(1)
  const getData = async () => {
    // fetch("https://reqres.in/api/users?page=2")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data.data);
    //     setList(data.data);
    //   });
    //llamar a la api con fetch y async await
    const result = await fetch(`https://reqres.in/api/users?page=${page}`)
    //convertir la respuesta a json
    const resultJson = await result.json()
    //imprimir la lista
    console.log(resultJson.data)
    //guardar la lista en el estado
    setList(resultJson.data)
  };

  useEffect(() => {
    //llamar a la funcion getData cuando se renderiza el componente y cuando cambia el estado page
    getData();
  }, [page]);

  const next = () =>{
    //aumentar el numero de pagina
    setPage(page + 1)
  }
  const back = () =>{
    //disminuir el numero de pagina
    setPage(page - 1)
  }
  return (
    <div>
      <h1>lista - page: {page}</h1>
      <button onClick={back}>back</button>
      <button onClick={next}>next</button>
      {/** renderizamos la lista */}
      {list.map((user) => {
        return (
          <div key={user.id}>
            <p>{user.first_name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CodeSessionThree2;
