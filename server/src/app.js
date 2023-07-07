const express=require('express')
const HmRoute=require('./routes/home')
const AuthRoute=require('./routes/auth')
const app=express()

app.use(express.json())
app.use("/",HmRoute)
app.use("/auth",AuthRoute)


app.listen(7000,()=>{
    console.log("Server listen at port 7000");
})