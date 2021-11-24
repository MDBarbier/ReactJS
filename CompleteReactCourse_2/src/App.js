import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { id: 1, title: "Car Insurance", amount: 123.45, date: new Date(2021, 2, 28) },
    { id: 2, title: "Rent", amount: 389.45, date: new Date(2021, 2, 25) },
    { id: 3, title: "Broadband", amount: 75.0, date: new Date(2021, 2, 27) }
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}>
      </ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}>
      </ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}>
      </ExpenseItem>
    </div>
  );
}

export default App;
