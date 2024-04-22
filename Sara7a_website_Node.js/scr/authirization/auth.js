  import jwt from 'jsonwebtoken'

  
   const auth = ()=>{

  return  (req,res,next)=>{
    // console.log(req.headers.udateduser)
    jwt.verify(req.headers.token,'iti',(err,decoded)=>{
        if(err) return ({message:"invalid tokin"})

        req.x=req.headers.udateduser
        req.userId=decoded.id
        next()

    })


    }
}
export default auth