const express =require('express')
const router = express();
router.use(express.json());
const userController=require('../controllers/usercontroller')

router.post('/send-otp',userController.sendOtp)

module.exports=router;