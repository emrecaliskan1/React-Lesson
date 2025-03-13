import React, { useState } from 'react'
import './ExpenseForm.css'

function ExpenseForm({onAddExpense}){

    // const [title,setTitle] = useState('');
    // const [amount,setAmount] = useState('');
    // const [date,setDate] = useState('');

    const [userInput,setUserInput] = useState({
        title:'',
        amount:0.0,
        date:""
    })
 
    const titeChangeHandler = (e) => {
        setUserInput({
            //solunda kaldıgı değişkenlerin bileşenlerin ayrı ayrı yazılmasını sağlar. spread operatörü ve prevState araştır
            ...userInput,
            title:e.target.value
        }) //updates userInput changestitle
    }

    const amountHandler = (e) => {
        setUserInput({
            ...userInput,
            amount:e.target.value
        })
        // setAmount(e.target.value)
    }

    const dateHanndler = (e) => {
        setUserInput({
            ...userInput,
            date:e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()

        //console.log(userInput)

       onAddExpense(userInput)

        //object
        // const expenseData = {
        //     title:title,
        //     amount:amount,
        //     date : new Date(date)
        // } userInput kulllandıgımızda gerek kalmaz

        setUserInput({
            title:"", 
            amount:0,
            date:""
        })
    }


  return (
    <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type="text" onChange={titeChangeHandler} value={userInput.title}/>
            </div>

            <div className='new-expense__control'>
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" onChange={amountHandler} value={userInput.amount}/>
            </div>

            <div className='new-expense__control'>
                <label>Date</label>
                <input type="date" min="2024-01-01" max="2040-01-01" onChange={dateHanndler} value={userInput.date}/>
            </div>

            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>

        </div>

    </form>
  )
}

export default ExpenseForm