const express = require("express");
const Joi = require("joi");
const { UserData } = require("../Models/movie");
const app = express();

app.get("/get", async (req, res) => {
  const users = await UserData.find();
  return res.status(200).send(users);
});

app.get("/get/one", async (req, res) => {
const user = await UserData.findById(req.query.id);
return res.status(200).send(user);
});

app.post("/create", async (req, res) => {
  const users = new UserData(req.body);
  try {
    await users.save();
  } catch (ex) {
    return 500;
  }
  return res.status(200).send('Success');
});

app.post("/edit", async (req, res) => {
  const update = await UserData.findByIdAndUpdate(req.body._id, {
    $set: body,
  });
  return res.status(200).send('Success');
});

app.post("/delete", async (req, res) => {
  try {
    await UserData.findOneAndDelete({
      _id: req.body._id,
    });
  } catch (error) {
    return 500;
  }

  return res.status(200).send('Success');
});


module.exports = app;
