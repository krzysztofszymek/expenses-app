import './Expenses.scss';
import { useState } from "react";
import ExpensesFilter from "./ExpenseFilter/ExpenseFilter";
import Card from "../UI/Card/Card";
import ExpensesList from './ExpensesList/ExpensesList';

function Expenses(props) {
    const [yearFilter, setFilter] = useState('2022');
    const filteredData = props.data.filter(filterByYear);

    function filterByYear(data) {
        return data.date.getFullYear().toString() === yearFilter
    }

    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={yearFilter}
                onSetFilter={setFilter}
            />
            <ExpensesList items={filteredData}/>
        </Card>
    );
}

export default Expenses;