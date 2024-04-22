import express from 'express'
import {add , sendtouser} from './message.controller.js'
import auth from '../../authirization/auth.js'
import { validation } from '../../authirization/validation.js'
import { messageSchema } from './messageSchemaVal.js'
const messagerought=express.Router()


messagerought.post('/addtext/:rec_id',validation(messageSchema), add)

messagerought.post('/spicficUser', auth(), sendtouser)





export { 
    messagerought }