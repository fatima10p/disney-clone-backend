const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    createdDate: { type: Date, default: Date.now },
  },
  { strict: false }
);
const UserData = mongoose.model("users", userSchema);
exports.UserData = UserData;
