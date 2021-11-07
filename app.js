const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const indexRouter = require("./routes/index");
const mongoose = require("mongoose");
var cors = require('cors')

var app = express();
mongoose
  .connect(
    "mongodb+srv://ifatimazahid:10pearls10@cluster0.zsurv.mongodb.net/disneyclone?retryWrites=true&w=majority"
  )
  .catch((err) => console.error("Could not connect to database...", err));


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public/images")));
app.use(cors()) 
app.use("/public", express.static("public"));
app.use("/api", indexRouter);
app.use(function (req, res, err) {
  console.log(err, ':::::')
  // next(createError(404));
});

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', "http://localhost:3000");
  res.header('Access-Control-Allow-Headers', true);
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  next();
});

const SERVICE_PORT = 8081;
const server = app.listen(SERVICE_PORT);
console.log(`Server is started & listening on port ${SERVICE_PORT}`)

process.on('uncaughtException', (err) => {
   console.log(err,'uncaughtException')

});
process.on('exit', (err) => {
   console.log(err,'exit')
});

module.exports = app;
