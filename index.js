const express = require("express");
const cors = require("cors");
const db = require("mongoose");
const dataRoute = require("./Routes/dataRoute");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", dataRoute);

db.connect(process.env.DB_LINK);

app.listen("8049", () => console.log("Server is up"));
