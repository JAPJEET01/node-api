const mongoose = require("mongoose")
const StuSchema = new mongoose.Schema({
    name:{type:String,default:""},
    email:{type:String,default:""},
    phone:{type:Number,default:0},
    createdAt:{type:Date,default:Date.now()},
    status:{type:Boolean,default:true},

})

module.exports = new mongoose.model("student", StuSchema)