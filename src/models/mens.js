const mongoose = require("mongoose");

const validator = require("validator");

const menSchema = new mongoose.Schema({
    ranking:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    dob:{
        type:Date,
        required:true,
    
    },
    country:{
        type:String,
        required:true,
    },
    score:{
        type:Number,
        required:true
    },
    event:{
        type:String,
        default:"100"
    }
})

// we are creating a new collection
const MensRanking = new mongoose.model("MenRanking",menSchema);

module.exports=MensRanking;