//import mongoose module
const mongoose = require('mongoose');
//create user schema
const userSchema = mongoose.Schema({
    // attr: type

    firstName: String,
    lastName: String,
    email: String,
    pwd: String,
    confirmPwd:String,
    tel:String,
    role:String,
    avatar:String
});
// affect model name to shema
const user = mongoose.model("User", userSchema);
//make match importable
module.exports = user;