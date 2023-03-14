const express = require("express");
const { port } = require("./config");
const { basketproxy } = require("./proxies");

const app = express();

app.get("/", (req, res) => {
  const { name } = req.query;
  res.send(`Hello ${name}`);
});

app.use("/basket", basketproxy);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
