import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { changedTextColor } from './ThemeSlice';
export const Theme = () => {
  const [color,setcolor]=useState("white");
  const dispatch = useDispatch()
  return (
    <>
    <input type="text" onChange={(e)=>{setcolor(e.target.value)}}/>
    <button onClick={()=>{dispatch(changedTextColor(color))}}>Change Text Color</button>
    </>
  )
}
