import Card from "./Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem({date,amount,title}) {

  // console.log(props);
  // const expenseDate = new Date(2021,2,28);
  // const expenseTitle = 'Car Insurance';
  // const expenseAmount = Math.random()*1000;
  

  return (
    <Card className="expense-item">
     <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount.toFixed(2)}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
