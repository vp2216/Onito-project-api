const db = require("mongoose");

const dataSchema = new db.Schema({
    govtidType: { type: String },
    govtid: { type: String },
    pincode: { type: Number },
    country: { type: String },
    state: { type: String },
    city: { type: String },
    address: { type: String },
    email: { type: String },
    relation: { type: String },
    emergencyContact: { type: Number },
    guardianName: { type: String },
    nationality: { type: String },
    occupation: { type: String },
    mobile: { type: Number },
    gender: { type: String },
    age: { type: Number },
    name: { type: String }
});

module.exports = db.model("data", dataSchema);