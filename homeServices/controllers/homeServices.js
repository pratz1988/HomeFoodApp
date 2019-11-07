const express = require("express");
const router = express.Router();

//Models
const sellItemModel = require("../models/sellItemInfo");
const userModel = require("../models/users");

// =======================================
//            7 Restful Routes
// =======================================
///////////     INDEX   ///////////////////
router.get("/", (req, res) => {
    sellItemModel.find({}, (err, allItems) => {
      if (err) {
        res.send(err);
      } else {
        res.render("index.ejs", {
          allItems
        });
      }
    });
  }); 

router.get("/sellItems", (req, res) => {
  sellItemModel.find({}, (err, allItems) => {
    if (err) {
      res.send(err);
    } else {
      res.render("index.ejs", {
        allItems
      });
    }
  });
});

///////////     NEW   ///////////////////
// NEW (CLIENT)
router.get('/new', (req, res) => {
    res.render('new.ejs');
  });

///////////     SHOW   ///////////////////

///////////     CREATE   //////////////////

///////////     DELETE   //////////////////

///////////     EDIT   //////////////////

///////////     PUT   //////////////////

module.exports = router;
