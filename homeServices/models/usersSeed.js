const mongoose = require('mongoose');
const usersModel = require("./users");

const seedUsersInfo = [
    {
        name: "Pratz",
        email: "pratz@gmail.com",
        password: "pratz",
        phoneNo: 2036533445,
        location: "Stamford"
    },
    {
        name: "Pradeep",
        email: "pradeep@gmail.com",
        password: "pradeep",
        phoneNo: 2033333333,
        location: "Stamford"
    },
    {
        name: "Vivan",
        email: "vivvu@gmail.com",
        password: "vivvu",
        phoneNo: 2038888888,
        location: "Stamford"
    },
    {
        name: "Dimpi",
        email: "dimpi@gmail.com",
        password: "dimpi",
        phoneNo: 2039999999,
        location: "Stamford"
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
usersModel.collection.drop();

usersModel.create(seedUsersInfo, (err, newItems) => {
    if (err) {
      console.log('Seeding error: ', err);
    } else {
      console.log('Seeding OK: ', newItems);
    }
    dbConnection.close();
  });
}

seedDB();

module.exports = seedUsersInfo