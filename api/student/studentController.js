const Student = require("./studentModel")
const User = require("../user/userModel")
const bcrypt = require("bcrypt")
const saltrounds = 10

exports.AddStu=(req,res)=>{

    User.findOne({email:req.body.email})
    .then(data=>{
        if(data != null ){
            res.json({
                status:401,
                succcess:false,
                message:"Student already exist "
            })
        }
        else{
            let tecobj = Student()
            tecobj.name = req.body.name,
            tecobj.email = req.body.email,
            tecobj.Phone = req.body.Phone
            tecobj.save()
            .then(data=>{
                let userObj = User()
                userObj.name = data.name,
                userObj.email = data.email,
                userObj.UserType = 2,
                userObj.password = bcrypt.hashSync(req.body.password,saltrounds)
                userObj.studentId = data._id

                userObj.save()
                .then(udata=>{
                    res.json({
                        status:200,
                        succcess:true,
                        message:"Student added successfully",
                        data:data,
                        userdata :udata
                    })  

                })


            })
        }
    })
    
}