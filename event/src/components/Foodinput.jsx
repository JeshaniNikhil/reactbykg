import React from "react";
import styles from "./Foodinput.module.css";
export default function Foodinput({handleonchange}) {
 
  return (
    <input
      type="text"
      className={`${styles["foodinput"]} form-control`}
      placeholder="Enter Food Item Here"
      onKeyDown={handleonchange}
    />
  );
}
