import express from 'express'
import {signUp,signIN,editUser,editpassword, isVerify} from './user.controller.js'
import auth  from '../../authirization/auth.js'
import { sign } from 'crypto'
import { validation } from '../../authirization/validation.js'
import { schemaValidateSignin, signUPSchema } from './userSchemaValidation.js'

const userRoutes=express.Router()

userRoutes.post('/signup',validation(signUPSchema), signUp)

userRoutes.post('/signIn',validation(schemaValidateSignin),signIN)

userRoutes.post('/edit',auth(), editUser)

userRoutes.post('/editPasswd',auth(), editpassword)

 userRoutes.get('/user/verify/:token', isVerify)




export {
    userRoutes
}