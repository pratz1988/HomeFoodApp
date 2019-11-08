const express = require('express')
const session = require("express-session");
const bcrypt = require('bcrypt');
const router = express.Router();

//MODEL
const userModel = require("../models/users");


///////////     New  ///////////////////
router.get("/new", (req, res) => {
        res.render("users/newLogin.ejs");
  }); 

  router.get("/signUp/new", (req, res) => {
    res.render("users/newSignUp.ejs");
}); 


//CREATE(POST)
// router.post("/sellItems", (req, res) => {
//     Product.create(req.body, (error, createdProduct) => {
//       if (error) {
//         res.send(error);
//       } else {
//         res.redirect("/sellItems");
//       }
//     });
//   });
  

//Export Module
module.exports = router;