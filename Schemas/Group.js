const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
  owner: { type: mongoose.SchemaTypes.ObjectId, ref: "User" },
  contact: {
    name: String,
    email: String,
  },
  name: { type: String, unique: true },
  avatar_url: String,
  members: [{ type: mongoose.SchemaTypes.ObjectId, ref: "User" }],
});

module.exports = mongoose.model("Group", groupSchema);
