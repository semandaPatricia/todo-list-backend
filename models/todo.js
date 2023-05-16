//const { default: mongoose } = require('mongoose');

const mongoose =require("mongoose")

const Schema =mongoose.Schema;

const todoSchema =new Schema({
    todo:{         //todo is a collection name
        type:String,    
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

const todo=mongoose.model("todo" ,todoSchema,'');
module.exports=todo