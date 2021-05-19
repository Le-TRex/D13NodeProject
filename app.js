const express = require("express");
const mongoose = require("mongoose");
const expressLayouts = require("express-ejs-layouts");
const { urlencoded } = require("express");

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

app.get("/projects", (request, response) => {
    response.render("projects");
});

app.get("/projects/create", (request, response) => {
    response.render("projects/create");
})

app.post("/projects/create", (request, response) => {
  console.log(request.body);
  response.redirect("/projects");
})