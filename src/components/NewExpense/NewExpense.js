import './NewExpense.scss'
import ExpenseForm from './ExpenseForm/ExpenseForm';

function NewExpense(props) {
    function saveExpenseDataHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddNewExpense(expenseData);
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpense={saveExpenseDataHandler}/>
        </div>
    );
}

export default NewExpense;