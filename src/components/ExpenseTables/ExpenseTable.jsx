import React from "react";
import "./ExpenseTable.css";
function ExpenseTable({ expenses }) {
  return (
    <>
      <h2>Expense List</h2>
      <div className='table-container'>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((exp) => (
              <tr key={exp.id}>
                <td>{exp.date}</td>
                <td>{exp.category}</td>
                <td>{exp.amount}</td>
                <td>
                  <span className='delete'>&times;</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ExpenseTable;
