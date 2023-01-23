const { body, validationResult } = require('express-validator');

exports.registerValidator=[
    body('email','please add a valid email').isEmail(),
    body('password','password must contain 10 character minimum').isLength({min:10}).matches(/[A-Z]/)
]
exports.loginValidator=[
    body('email','please add a valid email').isEmail(),
    body('password','password must contain 10 character minimum').isLength({min:10}).matches(/[A-Z]/)
]
exports.validation=(req,res,next)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        res.status(400).json({errors:errors.array()})
    }
    else{next()}
    
}