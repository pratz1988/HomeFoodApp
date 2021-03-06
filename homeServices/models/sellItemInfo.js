const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
    {
        userName: String,
        email: String,
        itemName: String,
        price: String,
        img: String,
        orderNote: String,
        location: String,
        time: String,
        description: String     
    },
    {
        timestamps: true
    }
);

const itemInfo = mongoose.model('sellerInfo', itemSchema);
module.exports = itemInfo;

