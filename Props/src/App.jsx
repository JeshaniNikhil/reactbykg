import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import FoodItem from "./components/Fooditems";
import Errormeg from "./components/Errormesg";
import Container from "./components/Container";
function App() {
    //let fooditem=[]
    let fooditem = [
      "Dal",
      "Green Vegetable",
      "Roti",
      "Salad",
      "Milk",
      "ButterMilk",
    ];
  return (
   <>
    <Container>
      <h1 className="food-heading">Healty Food</h1>
      <Errormeg fitem={fooditem}></Errormeg>
      <FoodItem fitem={fooditem}></FoodItem>
    </Container>
    <Container>
      <div>Above is the list of healthy foods that are good for your health and well being</div>
    </Container>
    </>
  );
}
export default App;
