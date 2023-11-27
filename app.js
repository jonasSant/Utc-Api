const express = require('express')
const app = express()
const router = express.Router()

app.use(express.json())



//app.use('api/utc', utc)

let {fusos} = require('./fusos')

const getUtc = (req, res)=>{
    res.status(200).json({sucess: true, data: fusos})
}

const postUtc =(req, res)=>{
    const {id, name, utc} = req.body
    if(!id | !name | !utc){
        return res.status(400).json({sucess:false, msg:"please provide id, name & value"})
    }
    res.status(200).json({sucess: true, data: [...fusos,  `{id: ${id}, name: ${name}, utc: ${utc} }`]})
}



//router.route('/', getUtc)

//app.use('/api/utc', getUtc)
app.use('/api/utc/post', postUtc)

app.listen(3000,()=>{
    console.log('Server on the port 3000...')
})
