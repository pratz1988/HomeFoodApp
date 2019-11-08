const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, index: {unique: true}},
        email: String,
        password: {type: String, required: true},
        phoneNo: Number,
        location: String
        
    }
);

const userModel = mongoose.model('userInfo', userSchema);
module.exports = userModel;