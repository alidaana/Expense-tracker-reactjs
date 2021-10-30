import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const SaveExpenseDate = (enteredData) => {
    const ExpenseData = {
      ...enteredData,
      id: Math.random().toString(),
    };
    props.onAddexpense(ExpenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseDate={SaveExpenseDate} />
    </div>
  );
};

export default NewExpense;
