const express = require("express");
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
  userModel.findOne({ email: req.body.email }, (err, foundUser) => {
    if (err) {
      console.log("Login error: ", err);
      res.send('SignUp');
    } else {
      if (req.body.password === foundUser.password) {
        console.log(req.body.email);
        res.redirect("/homeServices/sellItems");
      }
    }
  });
});

//// INDEX ////
router.get("/", (req, res) => {
  userModel.find({}, (err, allUsers) => {
    console.log(allUsers);
    if (err) {
      res.send(err);
    } else {
      res.render("users/userDetails.ejs", {
        allUsers
      });
    }
  });
});

//CREATE(POST) for REGISTER
router.post("/register", (req, res) => {
  userModel.create(req.body, (err, createdUser) => {
    console.log(req.body);
    if (err) {
      console.log("err");
    } else {
      // res.send('createdUser')
      res.redirect("/homeServices");
    }
  });
});

//Export Module
module.exports = router;
