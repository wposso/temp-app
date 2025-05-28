const express = require("express");
const router = express.Router();
const { getUsers } = require("../model/model_users");

router.post("/", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  const users = getUsers();
  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    res.json({ message: "Login successful" });
  } else {
    res.status(401).json({ message: "Invalid username or password" });
  }
});

module.exports = router;
