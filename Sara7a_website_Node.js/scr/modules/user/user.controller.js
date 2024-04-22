import exp from "constants"
import usermodel from '../../../db/user.model.js'
import bcrypt from 'bcryptjs'
import  jwt from "jsonwebtoken"
import Joi from "joi"
import sendEmail from "../../utilites/sendemail.js"
// import { decode } from "punycode"
// import { schemaValidateSignin, validateSchema } from "./userSchemaValidation.js"




export const signUp = async(req,res)=>{

    let {name,email,password}=req.body

    // if (req.body.confirmpass!=req.body.password)return res.json(" pasword not matched !!")
//     let errors= validateSchema.validate(req.body,{abortEarly:false})
//     if(errors?.error){res.json({message:"validation errror"  ,details: errors?.error?.details}  )}
// else{



    let checkFounded = await usermodel.findOne({"email":req.body.email })


    if(checkFounded){

        return res.json("This email already founded")
    }else {

        let hashedPasswd = bcrypt.hashSync(req.body.password , 10)

      let adduser=  await usermodel.insertMany({name:req.body.name, email:req.body.email, password:hashedPasswd})
    //   console.log(req.body.email)

      let token=jwt.sign({id:adduser[0]._id},"verify")
    //   res.json({token})
    sendEmail({email: req.body.email ,url:`http://localhost:3000/user/verify/${token}` })

      res.json({ message:"you add done ", adduser})

    }
    

}

export const isVerify=(req,res)=>{

    // res.json({message:"HELLO"})

    let verified =jwt.verify(req.params.token,"verify",async(err,decoded)=>{

         if(err) {return res.json("you need to verify")}
     else{

         let updateduser=  await usermodel.findByIdAndUpdate(decoded.id,{isVerify:true},{new:true})
         res.json({message:"done" , updateduser})
            
         }
     })
}



export const signIN= async(req,res)=>{


    // const errors=schemaValidateSignin.validate(req.body,{abortEarly:false})
    // if(errors.error){
    //     res.json({message:"validation error" ,details:errors.error.details})
    // }




    let signedemail = await usermodel.findOne({email:req.body.email ,"isVerify":true})

    if (!signedemail)
    {
     res.json("This email not found or you need to verify ")  
    }else{
           
        //compareSync return bolean if string matched with , hashed 
        let matchedpass=bcrypt.compareSync(req.body.password , signedemail.password)
        if (matchedpass) 
        {
            let token = jwt.sign({email:signedemail.email , name:signedemail.name , id:signedemail.id},'iti')
            
            return res.json(token)
        }
        else{

            res.json("This password incorrect")
    
        }
    }


    
}




export const editUser=async(req,res)=>{
     

    //  jwt.verify(req.body.token,'iti', async(err,decoded)=>{
    //     if(err)return res.json(err);
        console.log(req.x)


         let editedUser= await usermodel.findOne({_id:req.userId})

         if(!editedUser) return res.json("ivalid token")
         
         const result = await usermodel.updateOne({ _id:req.userId }, { $set: { name: req.x } });
         

         res.json(result)

}

export const editpassword=async(req,res)=>{

    if (!userId.id ) return {

        
    }

}



