const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");

const port = 5050;
const url = process.env.db_url;
app.use(express.json());

mongoose
  .connect(url)
  .then(() => {
    console.log("DB is connected");
  })
  .catch((err) => {
    console.log("DB is not connected", err);
  });

app.use("/", (req, res) => {
  res.status(200).json({
    message: "welcome back end",
  });
});

app.use((req, res) => {
  res.status(404).json({
    message: "Wrong Routing",
    data: null,
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
