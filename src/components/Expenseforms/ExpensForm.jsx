import {
  Fragment,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import "./ExpenseForm.css";

const ExpensForm = function ({ isOpen, example, onClose, onAddExpense }) {
  const [formExpense, setformExpense] = useState({
    id: crypto.randomUUID(),
    date: "",
    category: "",
    amount: 0,
  });

  // const obj = {
  //   name: "Nicat",
  //   age: 20,
  // };

  // obj = { ...obj, age: 10 };// <-> obj.age=10
  // const handleDateChange = (e) => {
  //   const dateValue = e.target.value;
  //   setformExpense((prevFormData) => ({ ...prevFormData, date: dateValue }));
  // };

  // const handleCategoryChange = (e) => {
  //   const categoryValue = e.target.value;
  //   setformExpense((prevFormData) => ({
  //     ...prevFormData,
  //     category: categoryValue,
  //   })); // <--> formExpense = {...formExpense, category : categoryValue}
  // };

  // const handleAmountChange = (e) => {
  //   const amountValue = e.target.value;
  //   setformExpense((prevFormData) => ({
  //     ...prevFormData,
  //     amount: amountValue,
  //   }));
  // };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setformExpense((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const submitForm = function (e) {
    e.preventDefault();
    console.log(formExpense);
    onAddExpense(formExpense);

    setformExpense({
      id: crypto.randomUUID(),
      date: "",
      category: "",
      amount: 0,
    });
  };
  return (
    <dialog open={isOpen}>
      <div className='modal-content'>
        <span className='modal-close' onClick={() => onClose()}>
          &times;
        </span>
        <h2>Add Expense</h2>
        <form onSubmit={submitForm}>
          <input
            type='date'
            name='date'
            onChange={handleFormChange}
            value={formExpense.date}
          />
          <input
            type='text'
            name='category'
            placeholder='Category'
            value={formExpense.category}
            onChange={handleFormChange}
          />
          <input
            type='number'
            name='amount'
            placeholder='Amount'
            onChange={handleFormChange}
            value={formExpense.amount}
          />
          <input type='submit' value={"Add Expense"} />
        </form>
      </div>
    </dialog>
  );
};

export default ExpensForm;
