const express = require("express");
const cors = require("cors");
const db = require("mongoose");
const dataRoute = require("./Routes/dataRoute");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", dataRoute);

db.connect("mongodb+srv://vp:vp@cluster0.qbyvryj.mongodb.net/onito");

app.listen("8049", () => console.log("Server is up"));