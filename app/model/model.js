const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  date: { type: String },
  placeofbirth: { type: String },
  jobRole: { type: String },
  cv: { type: String },
});

const recordModel = mongoose.model("record", recordSchema);

module.exports = recordModel;
