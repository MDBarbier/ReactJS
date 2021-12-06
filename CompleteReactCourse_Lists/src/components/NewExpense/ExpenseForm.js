import "./NewExpense.css";
import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [formHidden, setFormHidden] = useState(true);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  //This is an example of setting several pieces of state in one go
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  //And this is how you would then update that state. Note how we are relying on the previous form of state so we use the "function form" of updateState,
  //so that the async nature of it does not cause use issues.
  //   const titleChangeHandler = (event) => {
  //     setUserInput((prevState) => {
  //       return {
  //         ...prevState,
  //         enteredTitle: event.target.value,
  //       };
  //     });
  //   };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    clearFormData(setEnteredAmount, setEnteredDate, setEnteredTitle);
    setFormHidden(true);
  };

  return (
    <div>
      <form onSubmit={submitHandler} hidden={formHidden}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              value={enteredAmount}
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              value={enteredDate}
              min="2021-01-01"
              max="2022-12-31"
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
        <div
        className="new-expense__actions"
        onClick={toggleFormVisibility}        
        >
        <button>Cancel</button>
      </div>
      </form>
      <div
        className="new-expense__actions"
        onClick={toggleFormVisibility}
        hidden={!formHidden}
      >
        <button>Add New Expense</button>
      </div>
    </div>
  );

  function toggleFormVisibility() {
    if (formHidden) {
      setFormHidden(false);
    } else {
      setFormHidden(true);
    }
  }
};

export default ExpenseForm;

function clearFormData(setEnteredAmount, setEnteredDate, setEnteredTitle) {
  setEnteredAmount("");
  setEnteredDate("");
  setEnteredTitle("");
}
