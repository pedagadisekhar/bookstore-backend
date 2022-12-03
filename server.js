const express = require("express");
const mongoose = require("mongoose") 
const Bookschema = require("./model")
const cors = require("cors");
const app = express();

app.use(cors())

mongoose.connect("mongodb+srv://prtexam:prtexam@cluster0.rm9zzkx.mongodb.net/?retryWrites=true&w=majority").then(
    ()=>{
        console.log("db connected")
    }
).catch(err=>console.log(err))

app.use(express.json())

app.get("/",async(req,res)=>{
    try {
        const data = await Bookschema.find()
      res.send({
        message:"succes",
        data
      })
    } catch (error) {
        res.send({
            status:404,
            message:error.message
        })
    }
      
})

app.post("/add",async(req,res)=>{
    try {
        const data = await Bookschema.create(req.body)
        
      res.send({
        message:"addedsucces",
        data
      })
    } catch (error) {
        res.send({
            status:404,
            message:error.message
        })
    }
      
})


app.delete("/delete:id",async(req,res)=>{
    try {
        await Bookschema.findByIdAndDelete(req.params.id)
        const data = await Bookschema.find()
        return res.json({
            message:"deleted succesfully",
            data
        })
    } catch (error) {
        res.send({
            status:404,
            message:error.message
        })
    }

})
app.delete("/delete",async(req,res)=>{
    try {
        await Bookschema.deleteMany()
        const data = await Bookschema.find()
        return res.json({
            message:"deleted succesfully",
            data
        })
    } catch (error) {
        res.send({
            status:404,
            message:error.message
        })
    }

})

app.put("/update:id",async(req,res)=>{
    try {
        await Bookschema.UpdateOne(req.params.id)
        const data = await Bookschema.find()
        return res.json({
            message:"deleted succesfully",
            data
        })
    } catch (error) {
        res.send({
            status:404,
            message:error.message
        })
    }

})


app.listen(8080,()=>{console.log("server running")})