import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "./counter/CounterSlice";
export const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const themecolor = useSelector((state)=>state.theme.color)
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increment())}>+</button>
      <span className="value" style={{color:themecolor}}>Count: {count}</span>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>
        Increment By 10
      </button>
    </div>
  );
};