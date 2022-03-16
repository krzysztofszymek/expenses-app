import './Expenses.scss';
import { useState } from "react";
import Card from "../UI/Card/Card";
import ExpensesFilter from "./ExpenseFilter/ExpenseFilter";
import ExpensesList from './ExpensesList/ExpensesList';
import ExpensesChart from './ExpensesChart/ExpensesChart'

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
            <ExpensesChart expenses={filteredData}/>
            <ExpensesList items={filteredData}/>
        </Card>
    );
}

export default Expenses;