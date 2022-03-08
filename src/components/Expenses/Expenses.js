import ExpenseItem from "./ExpenseItem/ExpenseItem";
import ExpensesData from "./ExpensesData/ExpensesData";
import Card from "../UI/Card/Card";
import './Expenses.scss';

function Expenses() {
    return (
        <Card className="expenses">
            {ExpensesData.map((data) => (
                <ExpenseItem
                    key={data.id}
                    title={data.title}
                    amount={data.amount}
                    date={data.date} />
            ))}
        </Card>
    );
}

export default Expenses;