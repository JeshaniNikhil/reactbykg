import { useState } from 'react'
import './App.css'
import { Counter } from './features/Counter';
import Coin from './features/Coin';
import { Theme } from './features/theme/Theme';
function App() {
  
  return (
    <>
      <Counter></Counter>
      <Coin></Coin>
      <Theme></Theme>
    </>
  )
}
export default App
