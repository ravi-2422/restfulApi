const express = require("express");
const res = require("express/lib/response");
const app =express();
const port = process.env.PORT ||3000;
require("./db/conn");
app.use(express.json());   

const MensRanking = require("./models/mens");
const router = require("./routers/men");

// app.get("/",async (req,res)=>{
//     res.send("Hello user, How are you")
// })

// we will handle post req

// app.post("/mens",async (req,res)=>{
//     try{
//  const addingMensRecords=new MensRanking(req.body);
//  console.log(req.body);
//  const insertMens=await addingMensRecords.save();
//  res.status(201).send(insertMens);
//     } catch(e){
//    res.status(400).send(e);
//     }
// })

// // we will handle get request
// app.get("/mens",async (req,res)=>{
//     try{
//    const getMens=await MensRanking.find({});
//  res.status(201).send(getMens);
//     } catch(e){
//    res.send(e);
//     }
// })
// // we will handle get request for individual
// app.get("/mens/:id",async (req,res)=>{
//     try{
//         const _id=req.params.id;
//    //const getMen=await MensRanking.findById(_id);
//    const getMen=await MensRanking.findById(_id).sort({"ranking":1}); // use for sorting
//  res.status(400).send(getMen);
//     } catch(e){
//    res.send(e);
//     }
// })
// // we will handle patch request for individual
// app.patch("/mens/:id",async (req,res)=>{
//     try{
//         const _id=req.params.id;
//    const getMen=await MensRanking.findByIdAndUpdate(_id,req.body,{
//        new:true
//    });
//  res.status(500).send(getMen);
//     } catch(e){
//    res.send(e);
//     }
// })
// // we will handle delete request for individual
// app.delete("/mens/:id",async (req,res)=>{
//     try{
//     // const _id=req.params.id;
//    const getMen=await MensRanking.findByIdAndDelete(req.params.id);
//  res.status(500).send(getMen);
//     } catch(e){
//    res.send(e);
//     }
// })




// routing

//const router=require("./routers/men");

app.use(router);


app.listen(port,()=>{
  console.log(`sever is running on port ${port}`);
})

