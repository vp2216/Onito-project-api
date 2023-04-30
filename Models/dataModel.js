const db = require("mongoose");

const dataSchema = new db.Schema({

});

module.exports = db.model("data", dataSchema);