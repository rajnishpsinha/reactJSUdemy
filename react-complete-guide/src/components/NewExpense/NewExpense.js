import React from 'react';
import ExpenseForm  from './ExpenseForm';
import './NewExpense.css';



const NewExpense=(props)=>{
    const formDataHandler=enteredExpenseData=>{
        const expenseData={
        ...enteredExpenseData,
        id :Math.random().toString()
        }
        //console.log('expenseData',expenseData)
        props.addNewExpense(expenseData);
          
        }
      return ( 
    <div className="new-expense">
    <ExpenseForm onSaveFormExpense={formDataHandler}></ExpenseForm>
    </div>
    )
}
export default NewExpense;