const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8080;
const view = require("ejs");
const app = new express();

let loggedInUser = ""; //use cookie or something else for logged in user

const connnection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: "todo"
});

const signUp = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  connnection.query(
    `insert into users(username, password) values("${username}", "${password}");`,
    (err, data) => {
      if (err) return res.send("username already exists.");
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
      if (err) throw err;
      if (data.length == 0) return res.send("username or password incorrect");
      loggedInUser = username;
      res.redirect("/home");
    }
  );
};

const addTodo = (req, res) => {
  const todo = req.body.todo;
  connnection.query(
    `insert into todos(username, todo) values("${loggedInUser}", "${todo}");`,
    (err, data) => {
      if (err) throw err;
      res.redirect("/home");
    }
  );
};

const getTodos = (req, res) => {
  connnection.query(
    `select * from todos where todos.username="${loggedInUser}"`,
    (err, data) => {
      if (err) throw err;
      console.log(data);
      res.send(JSON.stringify(data));
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

app.set("views", __dirname + "/build");
app.engine("html", view.renderFile);
app.set("view engine", "html");

app.post("/signUp", signUp);
app.post("/login", login);
app.post("/addTodo", addTodo);

app.get("/home", (req, res) => {
  res.render("index.html");
});

app.get("/todos", getTodos);

app.listen(PORT, () => console.log("Listning on ", PORT));
