import React, { useState } from "react";
import User from "./User";

const App = () => {
  const [listUsers, setListUsers] = useState([
    { id: 1, name: "Juan", age: 20 },
    { id: 2, name: "Leonardo", age: 20 },
  ]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log("name:", name);
    console.log("age:", age);
    setListUsers([
      ...listUsers,
      { id: listUsers[listUsers.length - 1]?.id || 0 + 1, name: name, age: age },
    ]);

    setName("");
    setAge(0);
  };
  const handlerName = (e) => {
    setName(e.target.value); //12
  };
  const handlerAge = (e) => {
    setAge(e.target.value); //12
  };
  return (
    <>
      <div>
        {listUsers.map((user) => {
          return <User key={user.id} data={user} />;
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
