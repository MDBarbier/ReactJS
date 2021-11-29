import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';

const Expenses = (props) => {
  const expenseitemmap = props.data.map((item) => (    
      <ExpenseItem
      key={item.id}
      title={item.title}
      amount={item.amount}
      date={item.date}
      />
  ));

  return <Card className="expenses">{expenseitemmap}</Card>;
}

export default Expenses;
