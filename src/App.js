import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseData from "./components/Expenses/ExpensesData/ExpensesData";
import { useState } from "react";

function App() {
  const [expenseData, setExpenseData] = useState(ExpenseData);

  function addNewExpense(newExpense){
    setExpenseData((previousExpenses) => {
      return [newExpense, ...previousExpenses];
    });
    console.log(newExpense);
  }

  return (
    <div>
        <NewExpense onAddNewExpense={addNewExpense}/>
        <Expenses data={expenseData}/>
    </div>
  );
}

export default App;