const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/olympics",{
//useCreateIndex:true,
//useNewUrlParser:true,
//useUniiedTopology:true
}).then(()=>{
    console.log("connection is succesfull")
}).catch((e)=>{
    console.log("No connection")
})