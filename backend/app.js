const express = require('express');
const app = express();
// const http = require('http');
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

//config 
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());


const product = require("./routes/productRoute");
const errorMiddleware = require("./middleware/error");
app.use("/api/v1", product);
app.use(errorMiddleware);
module.exports = app;