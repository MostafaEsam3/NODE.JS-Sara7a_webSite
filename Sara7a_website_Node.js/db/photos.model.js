// import { string } from 'joi';
import mongoose from 'mongoose';


const photoSchema = new mongoose.Schema({
  
  photo:String,
  title:String,
},{timestamps:true})

const photomodel=mongoose.model("photo",photoSchema)

export default photomodel