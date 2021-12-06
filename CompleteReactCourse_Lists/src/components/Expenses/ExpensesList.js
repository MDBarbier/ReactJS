import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = props => {
    
    if (props.data.length === 0){
        return <h2 className="expenses-list__fallback">No expenses found for period.</h2>
    }

    const expenseitemmap = props.data.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ));

    return (
        <ul className="expenses-list">            
            {expenseitemmap}
        </ul>
    );
};


export default ExpensesList;