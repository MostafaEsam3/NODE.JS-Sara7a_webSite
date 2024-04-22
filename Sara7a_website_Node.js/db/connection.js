import mongoose from 'mongoose'

export const initialconnect = ()=>{
    mongoose.connect(`mongodb://localhost:27017/sarahaApp`).then(()=>
    console.log("connect to dataBase")).catch((err)=> console.log(`conection error ${err}`)
    )

}  

// export const init =()=> {

//    
// }

