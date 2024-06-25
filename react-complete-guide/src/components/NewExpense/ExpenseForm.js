import React, {useState} from 'react';

import './ExpenseForm.css';
 
const ExpenseForm =props=>{

const[showForm, setShowForm]=  useState(false);


const[enteredTopic,setTopic]=useState('');
const[enteredAmount,setAmount]=useState('');
const[enteredDate,setDate]=useState('');

const newExpenseForm={
    title:enteredTopic,
    amount:enteredAmount,
    date: new Date(enteredDate)
}


const topicChangeHandler = (event)=>{setTopic(event.target.value);}
const amoutChangeHandler = (event) =>{setAmount(event.target.value);}
const dateChangeHandler = (event) =>{setDate (event.target.value);}

const openForm= ()=>setShowForm(true);
const closeForm= ()=>setShowForm(false);

const formSubmitHandler =(event)=> {
    event.preventDefault();
   // console.log('newExpenseForm',newExpenseForm);
    props.onSaveFormExpense(newExpenseForm);
    setTopic('');
    setAmount('');
    setDate('');
    setShowForm(false);

}

if (showForm===false)
return (
    <div className="new-expense__controls">
    
    <div className="new-expense__actions">
        <button type='button' onClick={openForm}>Add Form</button>
    </div>
    
    </div>
)
    
else return(
<form onSubmit={formSubmitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Topic</label>
                <input type='text' value={enteredTopic} onChange={topicChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amout</label>
                <input type='number' value={enteredAmount} min="1.00" step="0.01" onChange={amoutChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
            </div>       

        </div>
       
        <div className="new-expense__actions">
                <button type='submit'>new form</button>
                <button type='button' onClick={closeForm}>cancel</button>
            </div>
        
    </form>
)}

export default ExpenseForm;