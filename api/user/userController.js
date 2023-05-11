const User = require("./userModel")
const Teacher = require("../teacher/teacherModel")
const bcrypt= require("bcrypt")
const jwt = require("jsonwebtoken")
let secret ="japjeet" 



exports.login=(req,res)=>{
    User.findOne({email:req.body.email})
    .then(data=>{
        if( data!= null){
            if(bcrypt.compareSync(req.body.password , data.password )){
                let payload ={
                    name: data.name,
                    email: data.email,
                    UserType: data.UserType,
                    UserType: data.UserType,
                    studentId: data.studentId,
                    teacherId: data.teacherId,
                }
                token = jwt.sign(payload,secret,({expiresIn:60*60*24*365}))
                res.json({
                    status:200,
                    success:true,
                    message:"Login Successful",
                    token:token
                })
            }
            else{
                res.json({
                    status:400,
                    success:false,
                    message:"please try again password does not match"
                })
            }
        }
        else{
            res.json({
                status:400,
                success:false,
                message:"not authorized"
            }) 
        }
    })
}


exports.getprofile=(req,res)=>{
    let decoded = req.decoded
    // .populate('teacherId')

    Teacher.findOne({_id:decoded.teacherId})
    .populate("_id")
    // .populate("Teacher")
    .then( data=>{
        res.json({
            status:200,
            success:true,
            message:"Profile Elemets are : ",
            data:decoded,
            data2:data
        
            
            


        })
    })
}


















// exports.login=(req,res)=>{
//     User.findOne({email:req.body.email})
//     .then(data=>{
//         if(data==null){
//             res.json({
//                 status:400,
//                 success:true,
//                 message:"User does not exist "
//             })
//         }
//         else{

//             if(bcrypt.compareSync(req.body.password, data.password)){
//                 let payload={
//                     name:data.name,
//                     email:data.email,
//                     UserType:data.UserType, 
//                     teacherId : data.teacherId, 
//                     studentId : data.studentId, 
//                     _id:data._id
            
 
    

//                 }

//                 let token = jwt.sign(payload,secret,({expiresIn:60*60*24*365}))
//                 res.json({
//                     status:400,
//                     success:true,
//                     message:"Login Successful",
//                     token:token
                    
//                 })  
            
//             }
//             else{
//                 res.json({
//                     status:400,
//                     success:false,
//                     message:"Usernamne Password does not match "
//                 })
//             }

//         }
//     })
// }