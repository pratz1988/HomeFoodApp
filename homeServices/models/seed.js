const mongoose = require('mongoose');
const sellItemModel = require("./sellItemInfo");

const seedFoodItemInfo = [
  {
    itemName: "Samosa",
    price: "$6",
    img: "http://mychutni.com/wp-content/uploads/2017/12/maxresdefault.jpg",
    description: "Oil fried with a savoury filling, such as spiced potatoes, onions, peas, lentils",
    orderNote: "Place order between 3pm - 6pm",
    location: "Springdale",
    time: "9am"
  },
  {
    itemName: "Gulab Jamun",
    price: "$8",
    img: "https://5.imimg.com/data5/VO/NJ/GLADMIN-5940560/gulab-jamun-500x500.jpg",
    description: "This delicious Gulab Jamun made from milk powder is super delicious melt-in-mouth sweet",
    orderNote: "Please order this item between 10am - 7pm today",
    location: "Stamford",
    time: "10am"
  },
  {
    itemName: "Chicken Biryani",
    price: "$13",
    img: "https://wallpapercave.com/wp/wp3053381.jpg",
    description: "Special Hyderabadi Biryani, cooking meat, long-grained Basmati rice and spices together, in three layers",
    orderNote: "Please order this item before 6pm today",
    location: "Stamford",
    time: "11am"
},
  {
    itemName: "Lamb Curry",
    price: "$11",
    img: "http://www.ndtv.com/cooks/images/iStock.608005280.jpg",
    description: "Slow cooked lamb in a spicy gravy",
    orderNote: "Place order for lunch",
    location: "Stamford",
    time: "10am"
  },

  {
    itemName: "Bhindi Masala",
    price: "$10",
    img: "http://mychutni.com/wp-content/uploads/2018/10/bhindi-masala.jpg",
    description: "Dish made with okra, onion, tomatoes & spices",
    orderNote: "Please order this item for your lunch today",
    location: "Stamford",
    time: "10am"
  }
  
];


// Seeding function
const seedDB = () => {
  // Declare db name, URI, and instantiate connection
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
    
//Delete database collection seed data
sellItemModel.collection.drop();

  sellItemModel.create(seedFoodItemInfo, (err, newItems) => {
    if (err) {
      console.log('Seeding error: ', err);
    } else {
      console.log('Seeding OK: ', newItems);
    }
    dbConnection.close();
  });
}

seedDB();

module.exports = seedFoodItemInfo;
