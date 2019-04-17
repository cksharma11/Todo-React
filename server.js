const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8080;
const app = new express();

const connnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "todo"
});

const signUp = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  connnection.query(
    `insert into users(username, password) values("${username}", "${password}");`,
    (err, data) => {
      if (err) res.send("username already exists.");
      res.redirect("/login");
    }
  );
};

const login = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  connnection.query(
    `select * from users where users.username="${username}" AND users.password="${password}";`,
    (err, data) => {
      if (err) res.send("username or password incorrect.");
      res.send("Query Ok.");
    }
  );
};

const logger = (req, res, next) => {
  console.log(req.method, req.url);
  next();
};

app.use(logger);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("build"));

app.post("/signUp", signUp);
app.post("/login", login);

app.listen(PORT, () => console.log("Listning on ", PORT));
