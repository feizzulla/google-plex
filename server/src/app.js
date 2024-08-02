const express = require("express");
const app = express();
const logger = require("morgan");
const router = require("./route/index");
const cookieParser = require("cookie-parser");
const cors = require("cors");

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api", router);

module.exports = app;
