import React, { useState } from 'react'
import './ExpenseFilter.css'

const ExpenseFilter =  ({selected,onChangeFilter}) => {


  return (
    <div className='expenses-filter'>
        <div className='expenses-filter__control'>   
            <label>Filter By Year</label>
            <select onChange={onChangeFilter} value={selected.year} >
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
         </select>
        </div>
    </div>
    
  )
}

export default ExpenseFilter