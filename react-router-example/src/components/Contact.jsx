import React from "react";
import { Link } from "react-router-dom";

export const Contact = () => {
  return (
    <>
      <div>Contact</div>
      <Link to={"/"}>Home</Link><br></br>
      <Link to={"/shop"}>Shop</Link>
    </>
  );
};
