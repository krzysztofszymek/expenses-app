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
  }

  function editExpenseTitle(expenseId, newTitle){
    let updatedExpenses = expenseData.map(element => (
      element.id === expenseId? {...element, title: newTitle}: element
    ))
    setExpenseData({ updatedExpenses });
  }

  return (
    <div>
        <NewExpense onAddNewExpense={addNewExpense}/>
        <Expenses data={expenseData} onEditExpenseTitle={editExpenseTitle}/>
    </div>
  );
}

export default App;