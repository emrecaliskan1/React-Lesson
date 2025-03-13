import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

const Expenses=({expenses}) =>{
    
    return(
        <>
        {expenses.lenght == 0 && (<div>No items</div>)}

        {expenses.lenght >0 && (
            <Card className="expenses">

            {expenses.map((expense)=>{
                <ExpenseItem
                key={Math.random()}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}>
                </ExpenseItem>
            })}
            </Card>

        )}

        
            {/* <ExpenseItem
            // id={expenses[0].id}
            title={expenses[0].title}
            amount={expenses[0].amount}
            date={expenses[0].date}
            ></ExpenseItem>

            <ExpenseItem
            // id={expenses[3].id}
            title={expenses[5].title}
            amount={expenses[5].amount}
            date={expenses[5].date}
            ></ExpenseItem> */}



        </>
    )
}

export default Expenses;