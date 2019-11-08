// =======================================
//              DEPENDENCIES
// =======================================
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const session = require("express-session");
const methodOverride = require("method-override");

///PORT
const PORT = process.env.PORT || 3000;

// CONTROLLERS
const homeServicesController = require("./controllers/homeServices.js");
const usersController = require("./controllers/users.js");

// =======================================
//              DATABASE
// =======================================
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/DB_NAME'

mongoose.connect(MONGODB_URI, {
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
app.use("/users", usersController);

// =======================================
//              PORT
// =======================================
app.listen(PORT, (req, res) => {
  console.log("listening on  PORT 3000!");
});

