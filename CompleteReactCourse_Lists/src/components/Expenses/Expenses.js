import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, {useState} from 'react';
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2021');
  const filteredArray = props.data.filter(checkItemAgainstFilter);
  const filterUpdatedHandler = (newFilter) => setFilteredYear(newFilter); 

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter onUpdateFilter={filterUpdatedHandler} filterYear={filteredYear} />
        <ExpensesList data={filteredArray}></ExpensesList>      
      </Card>
    </li>
  );

  function checkItemAgainstFilter(item) {    
    return item.date.getFullYear().toString() === filteredYear;
  }
};

export default Expenses;