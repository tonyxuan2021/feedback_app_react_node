const express = require("express");
const app = express();
const port = 8080;
const knex = require("knex")(require("./knexfile"));

const cors = require("cors");

app.use(cors());

app.get("/api/getfeedbacks", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
