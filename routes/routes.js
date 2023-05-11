const router = require("express").Router()
const stuController = require("../api/student/studentController")
const TecController = require("../api/teacher/teacherController")
const UserController = require("../api/user/userController")


router.post("/login",UserController.login)
router.use(require("../middleware/tecCheck"))
router.post("/addteacher",TecController.AddTec)
router.post("/addstudent",stuController.AddStu)
router.post("/getprofile",UserController.getprofile)

module.exports= router