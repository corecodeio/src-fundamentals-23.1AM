import React, { useState } from "react";
import User from "./../components/User";

const App = () => {
    //creamos un estado para guardar la lista de usuarios
  const [listUsers, setListUsers] = useState([
    { id: 1, name: "Juan", age: 20 },
    { id: 2, name: "Leonardo", age: 20 },
  ]);
  //creamos un estado para guardar el nombre
  const [name, setName] = useState("");
  //creamos un estado para guardar la edad
  const [age, setAge] = useState(0);

  const handlerSubmit = (e) => {
    //evitamos que se recargue la pagina
    e.preventDefault();
    //imprimimos los valores de los estados
    console.log("name:", name);
    console.log("age:", age);
    //creamos un nuevo usuario
    setListUsers([...listUsers, { id: listUsers[listUsers.length - 1]?.id || 0 + 1, name: name, age: age }]);
    //limpiamos los estados
    setName("");
    setAge(0);
  };
  
  const handlerName = (e) => {
    // actualizamos el estado name
    setName(e.target.value);
  };
  const handlerAge = (e) => {
    // actualizamos el estado age
    setAge(e.target.value);
  };
  return (
    <>
      <div>
        {listUsers.map((user,index) => {
          const handlerDelete = () => {
            console.log(user.id);
            // creamos una nueva lista de usuarios, sin el usuario que queremos eliminar
            const nuevaLista = listUsers.filter((item)=> item.id !== user.id)
            //un ejemplo de filter
            const array = [1,2,3,4,5,6,7,8,9,10]
            const nuevoArray = array.filter((item)=> item !== 5)
            // console.log(nuevoArray) [1,2,3,4,6,7,8,9,10]
            
            //actualizamos el estado listUsers
            setListUsers(nuevaLista)
          };
          return (
            <User key={index} data={user} handlerDelete={handlerDelete} />
          );
        })}
      </div>
      <form onSubmit={handlerSubmit}>
        <label>name</label>
        <input type="text" value={name} onChange={handlerName} />
        <br />
        <label>age</label>
        <input type="number" value={age} onChange={handlerAge} />
        <br />
        <button type="submit">agregar</button>
      </form>
    </>
  );
};

export default App;