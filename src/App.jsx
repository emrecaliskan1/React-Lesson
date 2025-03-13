import { useState,useEffect } from "react";
import "./App.css";
import ExpenseDate from "./components/Expenses/ExpenseDate";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {

  
  // const expenses = [
  //   {id:'a1',title:'Car Insurance',amount:294.67,date:new Date(2021,2,28)},
  //   {id:'a2',title:'Toilet Paper',amount:67.12,date:new Date(2023,2,14)},
  //   {id:'a3',title:'Cinema',amount:15,date:new Date(2025,1,1)},
  //   {id:'a4',title:'McDonalds',amount:31.67,date:new Date(2022,7,8)},
  //   {id:'a5',title:'Gucci-Prada',amount:1200.99,date:new Date(2025,1,1)},
  //   {id:'a6',title:'Beymen-Business Class',amount:900.99,date:new Date(2025,3,12)}

  // ];

  const [expenses,setExpenses] = useState([])

  const addExpense = (expense) => {
    setExpenses((prevState)=>  ( [...prevState,expense] )
    ) //3 nokta sayesinde expenses elemanlarını sırayla yazıyoruz
   
  }

  useEffect(() => {
    console.log("Güncellenmiş Expenses:", expenses);
  }, [expenses]);


  return (
    <div>
      <NewExpense onAddExpense = {addExpense}/>
      <Expenses expenses={expenses}></Expenses>
      

      
    </div>
  );
}

export default App;

/*<Expenses expenses={expenses}></Expenses>*/