import "./ExpenseItem.css";

function ExpenseItem({date,amount,title}) {

  const month = date.toLocaleDateString("en-US",{month:"long"});
  const year = date.getFullYear();
  const day = date.toLocaleDateString("en-US",{day:"2-digit"});

  // console.log(props);
  // const expenseDate = new Date(2021,2,28);
  // const expenseTitle = 'Car Insurance';
  // const expenseAmount = Math.random()*1000;
  

  return (
    <div className="expense-item">
      <div className="calendar">
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
        </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount.toFixed(2)}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
