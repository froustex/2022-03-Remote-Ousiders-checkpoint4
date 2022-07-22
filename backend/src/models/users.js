const connection = require("../../db-config");

const db = connection.promise();

const createOne = (pseudo, email, hashpassword, description) => {
  return db
    .query(
      "INSERT INTO users (pseudo, email, hashedpassword, description) VALUES (?, ?, ?, ?)",
      [pseudo, email, hashpassword, description]
    )
    .then((res) => res);
};

const findOne = (email) => {
  return db
    .query("SELECT * FROM users WHERE email = ?", [email])
    .then((res) => res[0]);
};

module.exports = { createOne, findOne };
