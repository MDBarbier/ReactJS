import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from './Card';

function Expenses(props) {
  const expenseitemmap = props.data.map((item) => (    
      <ExpenseItem
      title={item.title}
      amount={item.amount}
      date={item.date}
      />
  ));

  return <Card className="expenses">{expenseitemmap}</Card>;
}

export default Expenses;
