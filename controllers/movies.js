const express = require("express");
const Joi = require("joi");
const { MovieData } = require("../Models/movie");
const app = express();

app.get("/get", async (req, res) => {
  const movies = await MovieData.find();
  return res.status(200).send(movies);
});

app.get("/get/one", async (req, res) => {
  console.log(req.query.id, '&*#(#FJFFJ')
const movie = await MovieData.findById(req.query.id);
console.log(movie, 'PPPPPPPPP')
return res.status(200).send(movie);
});

app.post("/create", async (req, res) => {
  const movies = new MovieData(req.body);
  try {
    await movies.save();
  } catch (ex) {
    return 500;
  }
  return res.status(200).send('Success');
});

app.post("/edit", async (req, res) => {
  const update = await MovieData.findByIdAndUpdate(req.body._id, {
    $set: body,
  });
  return res.status(200).send('Success');
});

app.post("/delete", async (req, res) => {
  try {
    await MovieData.findOneAndDelete({
      _id: req.body._id,
    });
  } catch (error) {
    return 500;
  }

  return res.status(200).send('Success');
});


module.exports = app;
