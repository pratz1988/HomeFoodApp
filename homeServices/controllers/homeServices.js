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
      res.render("foodItems.ejs", {
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
router.get("/:id", (req, res) => {
    sellItemModel.findById(req.params.id, (err, currentFoodItem) => {
      console.log(currentFoodItem);
      if (err) {
        res.send(err);
      } else {
        res.render("show.ejs", {
         currentFoodItem
        });
      }
      // res.send("Show");
    });
  });

///////////     CREATE (POST)  //////////////////
router.post("/sellItems", (req, res) => {
    sellItemModel.create(req.body, (error, createdItem) => {
      if (error) {
        res.send(error);
      } else {
        res.redirect("homeServices/sellItems");
      }
    });
  });

///////////     DELETE   //////////////////

///////////     EDIT   //////////////////
router.get("/:id/edit", (req, res) => {
    sellItemModel.findById(req.params.id, (err, editItem) => {
      // console.log("buy ..." + foundProduct);
      if (err) {
        console.log(err);
      } else {
        res.render("edit.ejs", {
            editItem: editItem,
          index: req.params.id
        });
      }
    });
  });

///////////     PUT   //////////////////

module.exports = router;
