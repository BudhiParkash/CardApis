const mongoose = require('../db/mongoose');

const cardSchema = new mongoose.Schema(
    {    
    number :String,
    card_type: String,
    rating:String,
    review: String,
    joining_fees : String,
    annual_fees : String,
    description:String,
    expiry: String,
    cvv: String,
    name : String,
    card_link:String,
    image:String    
}
);

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;
