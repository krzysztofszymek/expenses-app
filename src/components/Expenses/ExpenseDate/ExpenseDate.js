import './ExpenseDate.scss';

function ExpenseDate(props) {
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const year = props.date.getFullYear();

    return (
        <div className='expenseDate'>
            <div className='day'>{day}</div>
            <div className='month'>{month}</div>
            <div className='year'>{year}</div>
        </div>
    );
}

export default ExpenseDate;