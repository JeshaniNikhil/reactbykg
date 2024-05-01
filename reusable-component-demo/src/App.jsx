import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import Randnum from './Randomnum'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Randnum></Randnum>
    <Randnum></Randnum>
    <Randnum></Randnum>
    <Randnum></Randnum>
    <Randnum></Randnum>
    </>
  )
}

export default App
