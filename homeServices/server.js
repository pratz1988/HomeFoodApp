// =======================================
//              DEPENDENCIES
// =======================================
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const homeServicesController = require("./controllers/homeServices.js");

// =======================================
//              DATABASE
// =======================================
mongoose.connect("mongodb://localhost:27017/homeFood", {
  useNewUrlParser: true
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

// =======================================
//              MIDDLEWARE
// =======================================
//Static
app.use(express.static(__dirname + "/public"));
//Body Parser
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

//routes
app.use("/homeServices", homeServicesController);
// app.use("/users", usersController);

// =======================================
//              PORT
// =======================================
app.listen(3000, (req, res) => {
  console.log("listening on  PORT 3000!");
});

