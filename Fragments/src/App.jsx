import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from "react";
function App() {
  let fooditem=['Dal','Green Vegetable','Roti','Salad','Milk','ButterMilk']
  return (
    <React.Fragment>
      <h1>Healty Food</h1>
    <ul class="list-group">
  {fooditem.map((item)=>(<li class="list-group-item" >{item}</li>))}
</ul>
    </React.Fragment>
  )
}
export default App
