const express = require("express");
// const session = require("express-session");
const bcrypt = require('bcrypt');
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

//CREATE(POST) for LOGIN
router.post("/check", (req, res) => {
  userModel.findOne({ email: req.body.email }, (err, foundUser) => {
      if(err) throw err;
      if (foundUser && foundUser._id){
        //Check password match only for bcrypted passwords
        // if (bcrypt.compareSync(req.body.password, foundUser.password)) {
        //Check password match for both bcrypt and non brcypted passwords
          if(req.body.password === foundUser.password) {
          console.log(req.body.email);
          res.redirect("/homeServices/sellItems");
      } else {
        res.send("wrong Password");
      }
    }
    else {
      res.send("Invalid Login, Please signUp");
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
  req.body.password = bcrypt.hashSync(
    req.body.password,
    bcrypt.genSaltSync(10)
);
  userModel.create(req.body, (err, createdUser) => {
    console.log(req.body);
    if (err) {
      console.log(createdUser);
      res.send("Email address has already been used by another account");
    } else {
      // res.send('createdUser')
      res.redirect("/users/login");
    }
  });
});

// sessions.delete('/logout', (req, res) => {
// 	req.session.destroy(() => {
// 		res.redirect('/');
// 	});
// });
//Export Module
module.exports = router;
