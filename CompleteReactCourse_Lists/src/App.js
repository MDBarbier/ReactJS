import React, {useState} from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const seedData = [
    { id: 1, title: "Car Insurance2", amount: 123.45, date: new Date(2021, 2, 28) },
    { id: 2, title: "Rent", amount: 389.45, date: new Date(2021, 2, 25) },
    { id: 3, title: "Broadband", amount: 75.0, date: new Date(2021, 2, 27) }
  ];

  const [expenses, setExpenses] = useState(seedData);

  const addExpenseHandler = (expense) => {

    setExpenses((prevState) => {
      return [
        ...prevState, 
        expense
      ]
    });
  };

  return (
    <div>      
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses data={expenses}></Expenses>
    </div>
  );
}

export default App;
