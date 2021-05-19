const express = require("express");
const mongoose = require("mongoose");

const app = express();

const dbUri = "mongodb://localhost:27017/projectManagement";
mongoose.connect(dbUri, {useUnifiedTopology: true, useNewUrlParser: true}) //promise = un objet
  .then(() => app.listen(4000)) //promise.then => quand la promise est résolue, faire xxx
  .catch(error => console.log(error)); //catch attrape les erreurs et permet de les traiter