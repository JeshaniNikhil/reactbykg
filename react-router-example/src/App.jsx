import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './components/Home'
import { Contact } from './components/Contact'
import { Shop } from './components/Shop'
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
      <Route path="/shop" element={<Shop></Shop>}></Route>
    </Routes>
    </>
  )
}

export default App
