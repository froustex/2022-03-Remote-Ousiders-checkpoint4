const express = require("express");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const cors = require("cors");

const app = express();
const connection = require("./db-config");

const { setUpRoutes } = require("./src/routes/index");

const PORT = process.env.PORT || 5000;

/*eslint-disable*/

connection.connect((err) => {
  if (err) console.err("Erreur de connexion à la DB", err);
  else console.warn(`Connexion à la DB ok, id ${connection.threadId}`);
});

app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
    optionsSuccessStatus: 200,
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

setUpRoutes(app);

app.listen(PORT, () => {
  console.error(`Server is running on port ${PORT}`);
});
