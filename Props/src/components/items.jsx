import styles from "./items.module.css";
const Items = (props) => {
  return (
    <li className={`${styles['kg-item']} list-group-item`}> 
      {props.foodItem}
    </li>
  );
};
export default Items;