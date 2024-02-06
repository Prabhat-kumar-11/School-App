const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(cors());
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Prabhat@SQL",
  database: "edunify",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
  } else {
    console.log("Connected to MySQL");
  }
});

app.post("/school", (req, res) => {
  const { name, address, city, state, contact, image, email_id } = req.body;

  const insertQuery =
    "INSERT INTO schools (name, address, city, state, contact, image, email_id) VALUES (?, ?, ?, ?, ?, ?, ?)";
  db.query(
    insertQuery,
    [name, address, city, state, contact, image, email_id],
    (err, result) => {
      if (err) {
        console.error("Error creating schools:", err);
        res.status(500).send("Internal Server Error");
      } else {
        res.status(201).json({
          id: result.insertId,
          name,
          address,
          city,
          state,
          contact,
          image,
          email_id,
        });
      }
    }
  );
});

app.get("/", (req, res) => {
  res.status(200).send("hello bakend");
});
app.get("/school", (req, res) => {
  const selectQuery = "SELECT * FROM schools";
  db.query(selectQuery, (err, results) => {
    if (err) {
      console.error("Error fetching schools:", err);
      res.status(500).send("Internal Server Error");
    } else {
      res.status(200).json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
