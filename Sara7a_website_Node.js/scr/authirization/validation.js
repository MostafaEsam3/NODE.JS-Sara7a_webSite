import { signUPSchema } from "../modules/user/userSchemaValidation.js"
import Joi from 'joi'

 let validation = (schema)=>{

    return(req,res,next)=>{

        let errors=schema.validate(req.body, {abortEarly:false})
        if(errors?.error){res.json({message:"validation error " , details:errors?.error?.details})}
        else{
            next()
        }
    }
}


export {
    validation,
     
}