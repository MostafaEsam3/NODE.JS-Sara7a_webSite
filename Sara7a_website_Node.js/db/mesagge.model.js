import mongoose from 'mongoose';


const messageSchema = new mongoose.Schema({
  
    textMessage:String,

    rec_id:{
        type:mongoose.Types.ObjectId,
        ref:"user"

    }
},{timestamps:true})

const messagemodel=mongoose.model("message",messageSchema)

export default messagemodel