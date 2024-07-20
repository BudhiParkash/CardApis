const mongoose = require('../db/mongoose');

const cardSchema = new mongoose.Schema(
    {

    name: {
        type :String , 
        require: true
    },
    number: String,
    expiry: String,
    cvv: String
}

);

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;
