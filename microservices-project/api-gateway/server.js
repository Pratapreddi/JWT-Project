const express = require("express");
const axios = require("axios");
const app = express();
app.use(express.json());
app.get("/users", async (req, res) => {
  const response = await axios.get("http://user-service:3000/users");
  res.json(response.data);
});
app.listen(3002, () => console.log("API Gateway running"));
