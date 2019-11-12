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

  /////// Route to get FoodItems //////
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

  /////// Route to get Menu //////
  router.get("/menu", (req, res) => {
    sellItemModel.find({}, (err, allItems) => {
      if (err) {
        res.send(err);
      } else {
        res.render("menu.ejs", {
          allItems
        });
      }
    });
  });

  /////// Route to HowItWorks //////////
  router.get("/howItWorks", (req, res) => { 
        res.render("howItWorks.ejs");
  });
  
   /////// Route to HowItWorks //////////
   router.get("/placeorder", (req, res) => { 
    res.render("placeOrder.ejs");
});

///////////     NEW   ///////////////////
// NEW (CLIENT)
router.get('/new', (req, res) => {
    res.render('new.ejs');
  });

///////////     CREATE (POST)  //////////////////
router.post("/foodItems", (req, res) => {
  sellItemModel.create(req.body, (error, createdItem) => {
    if (error) {
      res.send(error);
    } else {
      console.log(req.body)
      res.redirect("/homeServices/sellItems");
    }
  });
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



///////////     DELETE   //////////////////
router.delete("/:id", (req, res) => {
  sellItemModel.findByIdAndRemove(req.params.id, (err, deletedFoodItem) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/homeServices/sellItems");
    }
  });
});


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
router.put("/:id", (req, res) => {
  sellItemModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedItem) => {
      if (err) {
        console.log(err);
      } else {
        res.redirect("/homeServices/sellItems");
      }
    }
  );
});

module.exports = router;
