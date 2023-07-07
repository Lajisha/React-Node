const express = require("express");
const router = express.Router()

router.post('/Register',(req,res)=>{
    console.log(req.body);
    res.send("This is Registeration page")
})

router.post('/Login',(req,res) => {
    console.log(req.body);
    res.send("This Is login page")
})


module.exports = router;