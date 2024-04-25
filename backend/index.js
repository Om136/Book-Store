import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "Pheonix13",
  database: "dbmslab",
});

app.listen(5001, () => console.log("server started"));

app.get("/", (req, res) => res.json("Hello World"));
app.get("/books", (req, res) => {
  const filter = req.query.filter;
  const data = req.query.search;
  switch (filter) {
    case "all":
      var q = "SELECT * FROM books";
      break;
    case "title":
      var q = `SELECT * FROM books WHERE title= ?`;
      break;
    case "price":
      var q = "SELECT * FROM books WHERE price=?";
    case "category":
      var q = "SELECT * FROM books WHERE category=?";
      break;
    default:
      var q = "SELECT * FROM books";
  }
  if (filter==='all'){
    db.query(q, (error, data) => {
      if (error) {
        res.json(error);
      } else {
        res.json(data);
      }
    });
  }
  else{
    db.query(q, data, (error, data) => {
      if (error) {
        res.json(error);
      } else {
        res.json(data);
      }
    });
  }
  
});
app.post("/books", (req, res) => {
  const q =
    "INSERT INTO books (title,authorname,price,stock,publication,publishing_year) VALUES (?)";
  const values = [
    req.body.title,
    req.body.authorname,
    req.body.price,
    req.body.stock,
    req.body.publication,
    req.body.publishing_year,
  ];
  db.query(q, [values], (err, data) => {
    if (err) {
      res.json(err);
    } else {
      res.json("book stored successfully");
    }
  });
});
app.delete("/books/:id", (req, res) => {
  const id = req.params.id;
  const q = "DELETE FROM books WHERE id=?";
  db.query(q, id, (err, data) => {
    if (err) {
      res.json(err);
    } else {
      res.json("book deleted successfully");
    }
  });
});
app.put("/books/:id", (req, res) => {
  const id = req.params.id;
  const q =
    "UPDATE BOOKS SET title=?,authorname=?,price=?,stock=?,publication=?,publishing_year=? WHERE id=?";
  const values = [
    req.body.title,
    req.body.authorname,
    req.body.price,
    req.body.stock,
    req.body.publication,
    req.body.publishing_year,
  ];
  db.query(q,[...values,id], (err, data) => {
    if (err) {
      res.json(err);
    } else {
      res.json("book deleted successfully");
    }
  });
});
app.get("/orders", (req, res) => {
  const q = "SELECT * FROM order_book_info";
  db.query(q, (err, data = []) => {
    if (err) {
      res.json(err);
    } else {
      res.json(data);
    }
  });
});