import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, {useState} from 'react';

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2021');

  const expenseitemmap = props.data.map((item) => (
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

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onUpdateFilter={filterUpdatedHandler} filterYear={filteredYear} />,
        {expenseitemmap}
      </Card>
    </div>
  );
};

export default Expenses;
