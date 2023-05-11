const Teacher = require("./teacherModel")
const User = require("../user/userModel")
const bcrypt = require("bcrypt")
const saltrounds = 10

exports.AddTec=(req,res)=>{

    User.findOne({email:req.body.email})
    .populate('teacherId')
    .then(data=>{
        // console.log(data)
        if(data != null ){
            res.json({
                status:401,
                succcess:false,
                message:"teacher already exist "
            })
        }
        else{
            let tecobj = Teacher()
            tecobj.name = req.body.name,
            tecobj.email = req.body.email,
            tecobj.Phone = req.body.Phone
            tecobj.save()
            .then(data=>{
                let userObj = User()
                userObj.name = data.name,
                userObj.email = data.email,
                userObj.UserType = 1,
                userObj.password = bcrypt.hashSync(req.body.password,saltrounds),
                userObj.teacherId = data._id
                // studentId = data._id,
                userObj.save()
                .then(udata=>{
                    res.json({
                        status:200,
                        succcess:true,
                        message:"teacher added successfully",
                        data:data,
                        // udata:data._id,
                        userdata :udata
                    })  

                })


            })
        }
    })
    
}