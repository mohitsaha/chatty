const express = require('express')
const {registerUser,authUser,allUsers} =require("../controllers/userControllers")
const {protect} =require("../middleware/authMid")

const router = express.Router();

router.route("/").post(registerUser)
router.route("/").get(protect,allUsers);




module.exports = router;
