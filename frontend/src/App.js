import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {

  const [expenses, setExpenses] = useState([]);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const API = "http://43.205.62.70:3000";

  // Fetch expenses
  const fetchExpenses = async () => {
    try {
      const response = await axios.get(`${API}/expenses`);
      setExpenses(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  // Add expense
  const addExpense = async () => {

    if (!title || !amount) {
      alert("Please enter all fields");
      return;
    }

    try {

      await axios.post(`${API}/expenses`, {
        title,
        amount
      });

      setTitle("");
      setAmount("");

      fetchExpenses();

    } catch (error) {
      console.log(error);
    }
  };

  // Delete expense
  const deleteExpense = async (id) => {

    try {

      await axios.delete(`${API}/expenses/${id}`);

      fetchExpenses();

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">

      <h1>Expenses Tracker</h1>

      <div className="expense-form">

        <input
          type="text"
          placeholder="Expense Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button onClick={addExpense}>
          Add Expense
        </button>

      </div>

      <div className="expense-list">

        {expenses.map((expense) => (
          <div className="expense-card" key={expense.id}>

            <h3>{expense.title}</h3>

            <p>₹ {expense.amount}</p>

            <button
              onClick={() => deleteExpense(expense.id)}
            >
              Delete
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default App;
