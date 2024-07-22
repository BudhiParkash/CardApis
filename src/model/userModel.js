const mongoose = require('../db/mongoose');


const userSchema = new mongoose.Schema(
    {    

        name : String,
        email:String,
        phoneNumber:String,

}
);

const User = mongoose.model('User', userSchema);

module.exports = User;