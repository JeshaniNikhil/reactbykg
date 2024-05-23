import { useState } from "react";
import Items from "./items";
const FoodItem = ({fitem},) => {
  let [activeItems,SetactiveItems] =useState([]);
  let onBuyButton=(item)=>{
let newItems=[...activeItems,item];
SetactiveItems(newItems);
  }
  return (
    <ul class="list-group">
      {fitem.map((item) => (
        <Items
          key={item}
          foodItem={item}
          bought={activeItems.includes(item)}
          handlebybutton={()=>onBuyButton(item)}
        ></Items>
      ))}
    </ul>
  );
};
export default FoodItem;
