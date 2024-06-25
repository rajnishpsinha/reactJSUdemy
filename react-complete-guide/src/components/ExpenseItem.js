import React,{useState} from 'react';

import Card from './Card'
import './ExpenseItem.css'; 
import ExpenseDate from  './ExpenseDate'; 



function ExpenseItem(props) { 

  const [topic,setTopic]=useState(props.topic);
  const clickHandler =()=> {
    setTopic('Updated');
  console.log(topic);
  }
  return (
      <li>
      <Card className='expense-item'>
      <ExpenseDate buyDate={props.purchaseDate}></ExpenseDate>
      <div className='expense-item__description'><h2>{topic}</h2>
      <div className='expense-item__price'>{props.price}</div></div>
      <div><button onClick={clickHandler}>click</button></div>
    </Card>
    </li>
  );
}
export default ExpenseItem;
