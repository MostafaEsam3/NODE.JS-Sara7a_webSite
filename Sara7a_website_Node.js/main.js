import express from 'express'
import {userRoutes} from './scr/modules/user/user.routes.js';
import{messagerought} from './scr/modules/message/message.routes.js'
import { initialconnect } from './db/connection.js';
import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import photomodel from './db/photos.model.js';
const app =express() 
const port=3000
initialconnect()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'upload/')
    },
    filename: function (req, file, cb) {
      cb(null, uuidv4()+ "_"+file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

// const uploadd=multer({dest:"upload/"})

app.post('/photo',upload.single('image') ,async(req,res)=>{

    let added =await photomodel.insertMany({photo:req.file.filename,title:req.body.tittle})
    res.json(added)

})





app.use(express.json())
app.use(userRoutes)
app.use(messagerought)

app.listen(3000)






