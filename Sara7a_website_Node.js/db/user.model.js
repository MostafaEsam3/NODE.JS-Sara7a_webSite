import mongoose from 'mongoose';

const userScheme =new mongoose.Schema({

name:{
    type:String,
    minLingth:4
},
password:String,
email:String,
isVerify:{
    type:Boolean,
    default:false
}

},{timestamps:true});
const usermodel=mongoose.model("user",userScheme)



export default usermodel
