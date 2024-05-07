import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from "react";
function App() {
  //let fooditem=[]
  let fooditem=['Dal','Green Vegetable','Roti','Salad','Milk','ButterMilk']
  //conditional formating with if
  /*if(fooditem.length==0){
    return <h2>I am Still Hungry</h2>
  }*/
  return (
    <React.Fragment>
      <h1>Healty Food</h1>
      {/* conditional formating with ternary operator */}
      {/* {fooditem.length==0 ?  <h2>I am Still Hungry</h2> : null} */}
      {/* conditional formating with logical operator */}
      {fooditem.length==0 && <h2>I am Still Hungry</h2>}
    <ul class="list-group">
  {fooditem.map((item)=>(<li class="list-group-item" >{item}</li>))}
</ul>
    </React.Fragment>
  )
}
export default App
