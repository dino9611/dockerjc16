const express = require("express");
require("dotenv").config();
const app = express();
const mysql = require("mysql");

const conn = mysql.createConnection({
  host: process.env.HOST || "localhost",
  port: process.env.PORT || 8081,
  user: "root",
  password: "password",
  database: "hokibento",
});

app.get("/", (req, res) => {
  res.send(
    "welcome docker images nodejs aja bikiin otomatis" + process.env.NAME
  );
});

const { promisify } = require("util");
const db = promisify(conn.query).bind(conn);

app.get("/user", async (req, res) => {
  try {
    const user = await db("select * from user");
    return res.status(200).send(user);
  } catch (error) {
    console.log(error);
    return res.send({ message: "error", error });
  }
});
// console.log("dari docker " + process.env.NAME);
app.listen(5000, () => console.log("app jalan di 5000 " + process.env.TEST));
