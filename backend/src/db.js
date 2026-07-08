const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "eks-app-rds.c5cgiws8oi9q.ap-south-1.rds.amazonaws.com",
  user: "admin",
  password: "admin12345",
  database: "expense_db"
});

module.exports = pool;
