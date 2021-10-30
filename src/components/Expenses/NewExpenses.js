import ExpenseItem from "./ExpenseItem";
import "./NewExpenses.css";
import Card from "../UI/Card";
import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";

function NewExpenses(props) {
  const [filter, setFilter] = useState("2020");

  const filterHandler = (chosen) => {
    setFilter(chosen);
    console.log("From NewExpenses");
    console.log(chosen);
  };

  console.log(props.expenses);
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filter} onChooseFilter={filterHandler} />
      {/* Dynamicaly rendering list based on size of array */}

      {props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default NewExpenses;
