const express=require('express')
const userRoute=express.Router()
const {Register} =require('../controlles/userControllers')

userRoute.post('/register',Register)

module.exports= userRoute
