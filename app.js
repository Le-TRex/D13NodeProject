const express = require("express");
const mongoose = require("mongoose");
const expressLayouts = require("express-ejs-layouts");
const { urlencoded } = require("express");
const projectRoutes = require("./routes/projectRoutes")

const app = express();

const dbUri = "mongodb://localhost:27017/projectManagement";
mongoose.connect(dbUri, {useUnifiedTopology: true, useNewUrlParser: true}) //promise = un objet
  .then(() => app.listen(4000)) //promise.then => quand la promise est résolue, faire xxx
  .catch(error => console.log(error)); //catch attrape les erreurs et permet de les traiter

app.use(express.static("public"));
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));

app.get("/", (request, response) => {
  response.redirect("projects");
});

app.use("/projects", projectRoutes); //"/projects" => alias pour le début de chaque route