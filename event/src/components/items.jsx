import styles from "./items.module.css";
const Items = ({foodItem,bought,handlebybutton}) => {
  const handleonclick =(event)=>{
    console.log(`${foodItem} being brought`);
    console.log(event);
  }
  return (
    <>
    <span>
    <li className={`${styles['kg-item']} list-group-item ${bought ? 'active':null}`}> 
      <span>{foodItem}</span>
      <button className={`${styles['button']} btn btn-info`}
      // onClick={ (event) => {handleonclick(event)} }
      onClick={handlebybutton}
      >Buy</button>
    </li>
    </span>
    </>
  );
};
export default Items;