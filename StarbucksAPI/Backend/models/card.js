const mongoose=require('mongoose');

const cardSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    cardNumber:String,
    cvv:String
    
})

module.exports=mongoose.model('cardDetails',cardSchema);