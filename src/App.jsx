import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  
  const expenses = [
    {id:'a1',title:'Car Insurance',amount:294.67,date:new Date(2021,2,28)},
    {id:'a2',title:'Toilet Paper',amount:67.12,date:new Date(2023,2,14)},
    {id:'a3',title:'Cinema',amount:15,date:new Date(2025,1,1)},
    {id:'a4',title:'McDonalds',amount:31.67,date:new Date(2022,7,8)}
  ];



  return (
    <div>
      <ExpenseItem
        // id={expenses[0].id}
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>

      <ExpenseItem
        // id={expenses[1].id}
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}>
      </ExpenseItem>

      <ExpenseItem
        // id={expenses[2].id}
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>

      <ExpenseItem
        // id={expenses[3].id}
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
