import "./App.css";
import ExpenseDate from "./components/ExpenseDate";
import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";

function App() {
  
  const expenses = [
    {id:'a1',title:'Car Insurance',amount:294.67,date:new Date(2021,2,28)},
    {id:'a2',title:'Toilet Paper',amount:67.12,date:new Date(2023,2,14)},
    {id:'a3',title:'Cinema',amount:15,date:new Date(2025,1,1)},
    {id:'a4',title:'McDonalds',amount:31.67,date:new Date(2022,7,8)}
  ];



  return (
    <div>
      <Expenses expenses={expenses}></Expenses>

      
    </div>
  );
}

export default App;
