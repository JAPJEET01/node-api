const express = require("express")
const app = express()
const port = 3003
const db = require("./config/db")
const router = require("./routes/routes")
app.use(express.urlencoded({extended:true}))

app.use("/admin",router)


app.use("/",(req,res)=>{
    res.json({
        status:200,
        success:true,message:"hello world"
    })
})
app.listen(port,()=>{
    console.log(`server running at ${port}`)
})