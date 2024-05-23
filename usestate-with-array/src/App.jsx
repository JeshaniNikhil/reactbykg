import { useState } from 'react'
import './App.css'
function App() {
  const additem = () => { 
    let val=Math.random()*100
    setitem([...items,{
      id:items.length,
      value:Math.round(val)
  }])
   }
  const [items,setitem]=useState([]);
  return (
    <>
    <ol>
      {items.map(item=>(
       <li key={item.id}>{item.value}</li> 
      ))}
    </ol>
    <button onClick={additem}>Add Items</button>
    </>
  )
}
export default App