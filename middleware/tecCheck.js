const jwt = require("jsonwebtoken")
const secret ="japjeet"

module.exports = (req,res,next)=>{
    let token = req.headers['authorization']
    if(token == null || token == undefined || token ==""){
        res.json({
            status:400,
            success:false,
            message:"UNauthorized attempt"
        })
    }
    else{
        jwt.verify(token,secret,function(err,decoded){
            if(err){
                res.json({
                    status:400,
                    success:false,
                    message:"UNauthorized attempt again"
                })    
            }
            else{
             req.decoded = decoded
             console.log(decoded)
             next()   
            }
        })
    }
}