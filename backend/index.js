const express = require("express");
const app = express();

let port = 8080;

app.listen(port, () => {
  console.log(`currently at port ${port}`);
});

app.get("/", (req, res) => {
  res.send("first page.");
});

app.get("/cards", (req, res) => {
  const cardData = require("./cardInfo.json");
  res.send(cardData);
});
