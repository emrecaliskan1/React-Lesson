import { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem =({date,amount,title}) => {

  const [newTitle,setNewTitle] = useState(title); //Geriye array döndürür. Değişimini takip ettiğimiz değişkeni okumak için.
  const [newPrice,setNewPrice] = useState(amount);

  const clickHandler = () => {
    console.log('newTitle value: ' + newTitle);
    console.log('clicked');
    setNewTitle("Updated");
    console.log('newTitle value: ' + newTitle);
  }

  const increasePrice = () => {
    console.log(newPrice)
      setNewPrice(newPrice+10)
      console.log(newPrice)
  }

  const decreasePrice = () => {
    setNewPrice(newPrice-10)
  }



  // console.log(props);
  // const expenseDate = new Date(2021,2,28);
  // const expenseTitle = 'Car Insurance';
  // const expenseAmount = Math.random()*1000;
  

  return (
    <Card className="expense-item">
     <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{newTitle}</h2>
        <div className="expense-item__price">${newPrice.toFixed(2)}</div>
      </div>
      <button className="title-button"  onClick={clickHandler}>Change Title</button> 
      <button className="art-azalt" onClick={increasePrice}>+</button>
      <button className="art-azalt" onClick={decreasePrice}>-</button>
    </Card>
  );
}

export default ExpenseItem;
