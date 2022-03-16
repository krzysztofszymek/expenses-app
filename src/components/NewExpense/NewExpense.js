import './NewExpense.scss'
import ExpenseForm from './ExpenseForm/ExpenseForm';
import { useState } from 'react';

function NewExpense(props) {
    const [showExpenseForm, setShowExpenseForm] = useState(false);

    function saveExpenseDataHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddNewExpense(expenseData);
    }

    function showForm(){
        setShowExpenseForm(!showExpenseForm);
    }

    return (
        <div className='new-expense'>
            {!showExpenseForm && <button onClick={showForm}>Add New Expense</button>}
            {showExpenseForm && <ExpenseForm onHideForm={showForm} onSaveExpense={saveExpenseDataHandler}/>}
        </div>
    );
}

export default NewExpense;