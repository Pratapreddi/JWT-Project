const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());
app.post("/login", (req, res) => {
  const token = jwt.sign({ user: req.body.username }, "secret");
  res.json({ token });
});
app.listen(3001, () => console.log("Auth Service running"));
