const db = require("./db");

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


app.get("/expenses", async (req, res) => {

  try {

    const [rows] = await db.query(
      "SELECT * FROM expenses"
    );

    res.json(rows);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Database Error"
    });

  }

});


app.post("/expenses", async (req, res) => {

  try {

    const { title, amount } = req.body;

    const [result] = await db.query(
      "INSERT INTO expenses (title, amount) VALUES (?, ?)",
      [title, amount]
    );

    res.status(201).json({
      id: result.insertId,
      title,
      amount
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Database Error"
    });

  }

});	

app.delete("/expenses/:id", async (req, res) => {

  try {

    await db.query(
      "DELETE FROM expenses WHERE id = ?",
      [req.params.id]
    );

    res.json({
      message: "Expense deleted"
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Database Error"
    });

  }

});

app.get("/health", (req, res) => {
  res.send("Backend is very healthy on dev backend");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
