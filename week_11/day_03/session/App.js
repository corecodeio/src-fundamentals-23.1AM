import { useState } from "react";
import CodeSessionThree from './CodeSessionThree';
import CodeSessionThree2 from './CodeSessionThree2';
function App() {
  const [render,setRender] = useState(false);
  const [list, setList] = useState([]);
  const cambio = ()=>{
    setRender(!render)
  }
  return (
    <>
    <StandUoFour/>
      {render && <CodeSessionThree/>}
      {render && <CodeSessionThree2/>}
      <button onClick={cambio}>{render?"ocultar":"mostrar"}</button>
    </>
  );
}

export default App;
