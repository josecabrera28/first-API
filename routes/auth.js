
const express = require ("express");
const router = express.Router();
const { validatorRegister, validatorLogin} = require ('../validators/auth');
const { registerController, loginController } = require ('../controllers/auth');
//here all routes are in http://localhost:3001/api/auth

//register 1 item
router.post('/register',validatorRegister, registerController);

//register 1 item
router.post('/login',validatorLogin, loginController);

module.exports=router;