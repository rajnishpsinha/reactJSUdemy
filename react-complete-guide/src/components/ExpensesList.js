import React from 'react';
import  './ExpensesList.css';
import ExpenseItem from './ExpenseItem';



function ExpensesList(props){
    
    if (props.items.length ===0 )
    return <h2 className='expenses-list__fallback'>There is no item</h2> ;
   

          return (
            <ul className='expenses-list'>
            {props.items.map(expense => 
            <ExpenseItem
              key={expense.id}
              topic={expense.title}
              price={expense.amount}
              purchaseDate={expense.date}
            />
          )}</ul>
          )
}

export default ExpensesList;