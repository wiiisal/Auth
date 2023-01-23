const jwt=require('jsonwebtoken')
const user = require('../modals/user')



exports.isAuth=async(req,res,next)=>{
    const token=req.header('token')
    try {
        if(!token){
            res.status(400).send('you are not authorised')
        }else{
            const decode=jwt.verify(token,'hello')
            const utilisateur=await user.findById(decode.id)
            req.user=utilisateur
            next()
        }
    } catch (error) {
        console.log(error)
    }
}