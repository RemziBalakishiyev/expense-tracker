import { useState } from "react";
import ExpenseFormDialog from "./components/Expenseforms/ExpensForm";
import ExpenseTable from "./components/ExpenseTables/ExpenseTable";
import Nav from "./components/navbars/Navbar";
import "./App.css";
let EXPENSES = [
  {
    id: 1,
    date: "01-01-2000",
    category: "Food",
    amount: 100,
  },
  {
    id: Math.random().toString(36).slice(2),
    date: "01-01-2000",
    category: "Shopping",
    amount: 200,
  },
];
function App() {
  const [isOpenDialog, setisOpenDialog] = useState(false);
  const [expenseList, setExpenseList] = useState(EXPENSES);// EXPENSE = [...EXPENSE,{}]
  const openDialog = function () {
    setisOpenDialog((prevData) => {
      return !prevData;
    });
  };

  const addNewExpense = function (expenseData) { //{...objecy}
    setExpenseList((prevExpenses) => [...prevExpenses, expenseData]);
  };
  const closeDialog = function () {
    setisOpenDialog(false);
  };
  return (
    <>
      <Nav />
      <div className='App'>
        <h1>Expense Tracker</h1>
        <button className='btn' onClick={openDialog}>
          Add Expense
        </button>
        <div>
          <ExpenseFormDialog
            onClose={closeDialog}
            isOpen={isOpenDialog}
            onAddExpense={addNewExpense}
          />
        </div>
        <div style={{ marginTop: "150px" }}>
          <ExpenseTable expenses={expenseList} />
        </div>
      </div>
    </>
  );
}

export default App;
