import React from 'react'
import { Link } from 'react-router-dom'

export const Shop = () => {
  return (
    <>
    <div>Shop</div>
    <Link to={"/"}>Home</Link><br></br>
    <Link to={"/contact"}>Contact</Link>
    </>
  )
}
