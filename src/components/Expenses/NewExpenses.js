import "./NewExpenses.css";
import Card from "../UI/Card";
import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function NewExpenses(props) {
  const [filter, setFilter] = useState("2020");

  const filterHandler = (chosen) => {
    setFilter(chosen);
  };

  const filterExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filter;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filter} onChooseFilter={filterHandler} />
      <ExpensesList items={filterExpenses} />
    </Card>
  );
}

export default NewExpenses;
