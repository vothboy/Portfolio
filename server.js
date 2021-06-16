// This is aka app.js
/* eslint-disable no-console */
const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const router = express.Router();
const nodemailer = require("nodemailer");

const app = express();
/* const { v4: uuidv4 } = require("uuid"); */
const port = process.env.PORT || 5000;

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.listen(port, () => console.log(`Listining on port ${port}`));
