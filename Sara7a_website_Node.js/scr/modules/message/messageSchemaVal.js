import Joi from 'joi'


const messageSchema=Joi.object({

    textMessage:Joi.string().min(1).max(200).alphanum(),

    rec_id:Joi.string().length(24).hex(),

})

export{
    messageSchema
}