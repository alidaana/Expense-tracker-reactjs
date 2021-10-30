import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  // 1 way of setting multiple states
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  const [addClicked, setAddClicked] = useState(false);

  // functions to update states on change for each input
  const TitleChange = (event) => {
    setEnteredTitle(event.target.value);
  };

  const DateChange = (event) => {
    setEnteredDate(event.target.value);
  };
  const AmountChange = (event) => {
    setEnteredAmount(event.target.value);
  };

  // onsubmit to handle entered data
  const submitHandler = (event) => {
    event.preventDefault();

    const ExpenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    // two way bindingl we dont just listen to changes but also send a value to the input element
    setEnteredTitle("");
    setEnteredDate("");
    setEnteredAmount("");

    setAddClicked(false);

    // log the object created from all the inputs
    props.onSaveExpenseDate(ExpenseData);
  };

  const AddHandler = () => {
    setAddClicked(true);
  };
  const CancelHandler = () => {
    setAddClicked(false);
  };

  if (addClicked === false) {
    return (
      <div>
        <button onClick={AddHandler}>Add New Expense</button>
      </div>
    );
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={TitleChange}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={AmountChange}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={enteredDate}
            type="date"
            min="2019-01-01"
            step="2022-12-31"
            onChange={DateChange}
            required
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={CancelHandler}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
