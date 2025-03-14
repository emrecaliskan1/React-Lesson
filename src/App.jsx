import { useState,useEffect } from "react";
import "./App.css";
import ExpenseDate from "./components/Expenses/ExpenseDate";
import ExpenseItem from "./components/Expenses/ExpenseItem"
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseFilter from "./components/ExpensesFilter/ExpenseFilter";

const App = () => {

  
  // const expenses = [
  //   {id:'a1',title:'Car Insurance',amount:294.67,date:new Date(2021,2,28)},
  //   {id:'a2',title:'Toilet Paper',amount:67.12,date:new Date(2023,2,14)},
  // ];

  const [expenses,setExpenses] = useState([])
  const [year,setYear] = useState("2022")

  const addExpense = (expense) => {
    setExpenses((prevState) => {
      console.log([...prevState, { ...expense, date: new Date(expense.date) }]);
      return [...prevState, expense];
    });
  }; //spread operatörü '...'

  //Yıllara göre FİLTRELEME
  const filteredExpense = () => {
   return expenses.filter((e) => 
    new Date(e.date).getFullYear() == year)
  }
   
  
  // useEffect(() => {
  //   console.log("Güncellenmiş Expenses:", expenses);
  // }, [expenses]);

  
  //Yıl seçme dropdown Menüsü
  const dropDownChangeHandler = (e) => {
    setYear(e.target.value)
}




  return (
    <div>
      <NewExpense onAddExpense={addExpense}></NewExpense>
      <ExpenseFilter selected = {year} onChangeFilter={dropDownChangeHandler} />
      <Expenses expenses = {filteredExpense()}></Expenses>
    </div>
  );
}

export default App;
