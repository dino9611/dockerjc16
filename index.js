const express = require("express");
require("dotenv").config();
const app = express();

app.get("/", (req, res) => {
  res.send("welcome docker images nodejs " + process.env.NAME);
});
// console.log("dari docker " + process.env.NAME);
app.listen(5000, () => console.log("app jalan di 5000 " + process.env.TEST));
