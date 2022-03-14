import './Expenses.scss';
import { useState } from "react";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import ExpensesFilter from "./ExpenseFilter/ExpenseFilter";
import Card from "../UI/Card/Card";

function Expenses(props) {
    const data = props.data;
    
    const [filter, setFilter] = useState('2022');

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filter} onSetFilter={setFilter}/>
            {data.map((item) => (
                <ExpenseItem
                    key={item.id}
                    title={item.title}
                    amount={item.amount}
                    date={item.date} />
            ))}
        </Card>
    );
}

export default Expenses;