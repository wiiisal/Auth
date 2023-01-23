const express=require('express')
const userRoute=express.Router()
const {Register,login} =require('../controlles/userControllers')
const { isAuth } = require('../middleware/isAuth')
const { registerValidator, validation, loginValidator } = require('../middleware/validator')


userRoute.post('/register',registerValidator,validation,Register)
userRoute.post('/login',loginValidator,validation,login)
userRoute.get('/current',isAuth,(req,res)=>{
    res.send({utilisateur:req.user})
})
module.exports= userRoute
