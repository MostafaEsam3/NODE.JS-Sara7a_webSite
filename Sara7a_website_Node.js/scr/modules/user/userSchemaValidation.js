import Joi from 'joi'

const signUPSchema= Joi.object({

    name:Joi.string().alphanum().min(4).max(30).required(),
    password:Joi.string().
    pattern(/^[A-Z][a-z0-9]{3,8}$/).required(),
    confirmpass:Joi.ref("password"),
    email:Joi.string().email({minDomainSegments:2,tlds:{allow:["com","net", "pro"]}}),


})


const schemaValidateSignin=Joi.object({

    password:Joi.string().
    required().
    pattern(/^[A-Z][a-z0-9]{3,8}$/),
    
    email:Joi.string().required().email({minDomainSegments:2,tlds:{allow:["com","net","pro"]}}),
    })
    
export{
    signUPSchema,
    schemaValidateSignin
}