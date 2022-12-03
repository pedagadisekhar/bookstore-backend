const mongoose = require("mongoose");

const Bookschema = new mongoose.Schema({
    name:{type: String },
    description:{type: String},
    author:{type: String},
    bookname:{type: String},
    image:{type: String},
    price:{type: String}

})

module.exports = new mongoose.model("books",Bookschema)