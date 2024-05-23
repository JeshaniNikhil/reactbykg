import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { useState } from "react";
import FoodItem from "./components/Fooditems";
import Errormeg from "./components/Errormesg";
import Container from "./components/Container";
import Foodinput from "./components/Foodinput";
function App() {
  //let fooditem=[]
  //state management
  let [texttoshow, settextstate] = useState();
  let [fooditem, setFoodItems] = useState([]);
  // let texttoshow=textStateArr[0];
  // let settextstate=textStateArr[1];
  const handleonchange = (event) => {
    if(event.key === "Enter"){ 
    let newfooditem=event.target.value;
    event.target.value="";
    let newItem=[...fooditem,newfooditem];
    console.log("food item entered is:"+newfooditem);
    setFoodItems(newItem);
    }
  };
  return (
    <>
      <Container>
        <h1 className="food-heading">Healty Food</h1>
        <p>{texttoshow}</p>
        <Errormeg fitem={fooditem}></Errormeg>
        <Foodinput handleonchange={handleonchange}></Foodinput>
        <FoodItem fitem={fooditem}></FoodItem>
      </Container>
      <Container>
        <div>
          Above is the list of healthy foods that are good for your health and
          well being
        </div>
      </Container>
    </>
  );
}
export default App;
