const fs = require("fs");
const path = require("path");

function getUsers() {
  const data = fs.readFileSync(
    path.join(__dirname, "../data/users.json"),
    "utf-8"
  );
  return JSON.parse(data);
}

module.exports = {
  getUsers,
};
