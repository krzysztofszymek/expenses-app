import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseData from "./components/Expenses/ExpensesData/ExpensesData";

function App() {
  function addNewExpense(newExpense){
    console.log(newExpense);
  }

  return (
    <div>
        <NewExpense onAddNewExpense={addNewExpense}/>
        <Expenses data={ExpenseData}/>
    </div>
  );
}

export default App;