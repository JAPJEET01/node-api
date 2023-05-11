const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    name:{type:String,default:""},
    email:{type:String,default:""},
    password:{type:String,default:""},
    UserType:{type:Number,default:2},//admin = 0 , teacher = 1 ,student = 2
    studentId:{type:mongoose.Types.ObjectId,default:null,ref:'student'},
    teacherId:{type:mongoose.Types.ObjectId,default:null,ref:'teacher'},
    createdAt:{type:Date,default:Date.now()},
    status:{type:Boolean,default:true},

})

module.exports = new mongoose.model("user", userSchema)