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
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filter} onChooseFilter={filterHandler} />
      <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
      ></ExpenseItem>
    </Card>
  );
}

export default NewExpenses;
