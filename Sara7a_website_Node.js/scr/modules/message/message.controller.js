import messagemodel from "../../../db/mesagge.model.js";
import usermodel from "../../../db/user.model.js";
import sendEmail from "../../utilites/sendemail.js";

 const add = async(req,res)=>{
    // res.json(req.body)
 
    // let checkeduser= await usermodel.findById(req.body.rec_id)
        let checkeduser= await usermodel.findById(req.params.rec_id)


    if(!checkeduser)
    {
        return res.json({mesage:"valid id and not found user"})

    }else{
        let messag = await messagemodel.insertMany({textMessage:req.body.textMessage ,rec_id:req.params.rec_id})
        res.json(messag)

    }


     


}


const sendtouser= async(req,res)=>{

    let idOfMessage =await usermodel.findById({_id:req.userId})
// console.log(idOfMessage._id)

    let foundeMessage = await messagemodel.find({rec_id:idOfMessage._id})
    res.json(foundeMessage)



    


     
    // if(!idOfMessage) return res.json('not founded')

    // let messag =await messagemodel.insertMany({rec_id:req.userId , textMessage:req.headers.text})
     
    // res.json(idOfMessage)


}



export {
    add , sendtouser
}