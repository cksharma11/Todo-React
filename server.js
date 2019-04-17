const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8080;
const app = new express();

const logger = (req, res, next) => {
  console.log(req.method, req.url);
  next();
};

app.use(logger);
app.use(bodyParser.text());
app.use(express.static("build"));

app.listen(PORT, () => console.log("Listning on ", PORT));
