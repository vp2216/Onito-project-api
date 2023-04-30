const express = require("express");
const cors = require("cors");
const DATA = require("../Models/dataModel");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
    const data = await DATA.find().sort({ name: 1 });
    res.json({
        data
    })
});

app.post("/", async (req, res) => {
    await DATA.create(req.body);
    res.json({
        message: "Data added"
    })
})

app.delete("/:id", async (req, res) => {
    const id = req.params.id
    await DATA.deleteOne({ _id: id });
    res.json({
        message: "Data deleted"
    })
})

module.exports = app;