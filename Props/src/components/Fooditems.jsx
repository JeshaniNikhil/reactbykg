import Items from "./items";

const FoodItem = (props) => {
  return (
    <ul class="list-group">
      {
      props.fitem.map((item) => (
        <Items key={item} foodItem={item}></Items>
      ))
      }
    </ul>
  );
};
export default FoodItem;
