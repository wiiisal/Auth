const user = require('../modals/user')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


exports.Register = async(req,res)=>{
    const {email,password}=req.body
    try {
        const found=await user.findOne({email})
        if (found){
            res.status(400).send({
                errors:[{msg:'user already exists'}]
            })
        } else{
            const utilisateur= new user(req.body)
            const salt = 10
            const hash = bcrypt.hashSync(password, salt)
            utilisateur.password = hash
            const payload = { id: utilisateur._id };
            const token = jwt.sign(payload, "hello");
            await utilisateur.save()
          
            res.status(200).cookie("hello",token,{
                path: '/',
                expires: new Date(new Date().getTime() + 86400 * 1000),
                httpOnly: false,
                hello: false
            }).send({msg:'new user is added',utilisateur,token})
        }
        
    } catch (error) {
        res.status(500).send(error)
    }
}
exports.login=async(req,res)=>{
const {email,password}=req.body
    try {
    const utilisateur=await user.findOne({email})
    if(!utilisateur){
        res.status(400).send({errors:[{msg:"email not found"}]})
    }
    else{
        const match= await bcrypt.compare(password,utilisateur.password)
        if(!match){
            res.status(400).send({errors:[{msg:"wrong password"}]})
                }
            
                else{
                    const payload={id:utilisateur._id}
                    const token=jwt.sign(payload,"hello")
                    res.status(200).send({msg:"welcome home",utilisateur,token})
                } 
                
            }
} catch (error) {
     res.status(500).send({errors:[{msg:'could not login'}]})
}
}