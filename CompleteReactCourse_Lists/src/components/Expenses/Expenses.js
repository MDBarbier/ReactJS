import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, {useState} from 'react';

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2021');
  const filteredArray = props.data.filter(checkItemAgainstFilter); 
  const expenseitemmap = filteredArray.map((item) => (
    <ExpenseItem
      key={item.id}
      title={item.title}
      amount={item.amount}
      date={item.date}
    />
  ));
  const filterUpdatedHandler = (newFilter) => {
    setFilteredYear(newFilter);
  };
  let noExpensesContent = <p>No items found.</p>

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onUpdateFilter={filterUpdatedHandler} filterYear={filteredYear} />
        {expenseitemmap.length === 0 && noExpensesContent}
        {expenseitemmap}
      </Card>
    </div>
  );

  function checkItemAgainstFilter(item) {    
    return item.date.getFullYear().toString() === filteredYear;
  }
};

export default Expenses;