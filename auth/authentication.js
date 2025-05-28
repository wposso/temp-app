const express = require("express");
const router = express.Router();
const { getUsers } = require("../model/model_users");

router.get("/login", (req, res) => {
  const { username, password } = req.query;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }

  const users = getUsers();
  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    res.json({ message: "Login successful" });
  } else {
    res.status(401).json({ message: "Invalid username or password" });
  }
});

module.exports = router;
