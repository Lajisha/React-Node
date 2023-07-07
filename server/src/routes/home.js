const express=require('express')
const routerhome=express.Router()

routerhome.get('/',(req,res)=>{
    res.send("This is HomePage")
})

module.exports = routerhome;