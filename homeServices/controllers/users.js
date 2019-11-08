const express = require('express')
// const session = require("express-session");
// const bcrypt = require('bcrypt');
const router = express.Router();

//MODEL
const sellItemModel = require("../models/sellItemInfo");
const userModel = require("../models/users");


///////////     New  ///////////////////
router.get("/login", (req, res) => {
        res.render("users/newLogin.ejs");
  }); 

  router.get("/signUp", (req, res) => {
    res.render("users/newSignUp.ejs");
}); 


//CREATE(POST)
router.post("/check", (req, res) => {
    userModel.findOne({ username: req.body.username }, (err, foundUser) => {
      if (req.body.password == foundUser.password) {
        res.redirect("/homeServices/sellItems");
      } else {
        res.send('wrong password')
      }
    });

  });
  

//Export Module
module.exports = router;