const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    createdDate: { type: Date, default: Date.now },
  },
  { strict: false }
);
const MovieData = mongoose.model("movies", movieSchema);
exports.MovieData = MovieData;
