import { useMemo, useState } from 'react'
import './App.css'
function App() {
  const [add,setaddition]=useState(0);
  const [sub,substraction]=useState(100);
  function handleonadd(){
      setaddition(add+1)
  }
  function handleonsub(){
    substraction(sub-1)
  }
  const Multiplication =useMemo(function Multiply(){
    console.log("********************")
    return add*10
  },[add]);
  return (
    <>
      <h1>Addition:{add}</h1>
      <button onClick={handleonadd}>Add</button>
      <h1>Substraction:{sub}</h1>
      <button onClick={handleonsub}>Substraction</button>
      <h1>Multiplication:{Multiplication}</h1>
    </>
  )
}
export default App
