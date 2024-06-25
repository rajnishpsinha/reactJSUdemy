import React, {useState} from 'react';

import ExpenseItem from './ExpenseItem';
import Card from './Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {

  const[selectedYear,setSelectedYear]=useState('2021');
  const onYearFilterHandler=filterYear=> {
 //console.log(selectedYear);
  setSelectedYear(filterYear);
 // console.log(selectedYear);
}
 const [topic, setTopic]= useState(props.topic);
  // setTopic(props.topic);

  let filteredItems= props.items.filter(ele=>ele.date.getFullYear().toString()===selectedYear);
  
  
  return (
    <div>    
      <Card className="expenses">
        <ExpensesFilter onYearFilter={onYearFilterHandler} />
        <ExpensesChart expenses={filteredItems}/>
        <ExpensesList items={filteredItems}/>
      </Card>      
    </div>
  );
}

export default Expenses;