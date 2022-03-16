import './ExpenseForm.scss'
import { useState } from 'react';

function ExpenseForm(props) {
    const [enteredTitle, setTitle] = useState('');
    const [enteredDate, setDate] = useState('');
    const [enteredAmount, setAmount] = useState('');

    function titleChangeHandler(event){
        setTitle(event.target.value);
    }

    function dateChangeHandler(event){
        setDate(event.target.value);
    }

    function amountChangeHandler(event){
        setAmount(event.target.value);
    }

    function submitHandler(event){
        event.preventDefault();

        const data = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpense(data);
        setTitle('');
        setAmount('');
        setDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="controls">
                <div className="control">
                    <label>Title</label>
                    <input type='text' 
                        value={enteredTitle}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className="control">
                    <label>Amount</label>
                    <input type='number' 
                        min="0.01" 
                        step="0.01" 
                        value={enteredAmount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className="control">
                    <label>Date</label>
                    <input type='date' 
                        min="2019-01-01" 
                        max="2022-12-31" 
                        value={enteredDate}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className="actions">
                <button type="button" onClick={props.onHideForm}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;