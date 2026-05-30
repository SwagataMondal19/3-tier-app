const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let expenses = [];

app.get("/expenses", (req, res) => {
  res.json(expenses);
});

app.post("/expenses", (req, res) => {

  const expense = {
    id: Date.now(),
    title: req.body.title,
    amount: req.body.amount
  };

  expenses.push(expense);

  res.status(201).json(expense);
});

app.delete("/expenses/:id", (req, res) => {

  expenses = expenses.filter(
    expense => expense.id != req.params.id
  );

  res.json({
    message: "Expense deleted"
  });
});

app.get("/health", (req, res) => {
  res.send("Backend healthy");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
