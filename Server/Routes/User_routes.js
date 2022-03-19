const express=require('express');
const User=require('../Controller/User');

const router=express.Router();
router.use(express.json());

router.get("/signup",User.signup);
router.post("/login",User.login);

module.exports= router;
