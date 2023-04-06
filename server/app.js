const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");

require("dotenv").config();

const app=express();

app.use(cors());
app.use(express.json());

// connection to mongodb
mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: "true",
  useUnifiedTopology: "true"}).then(()=>{
    console.log("DB connectio successful")
  }).catch((err)=>{
    console.log(err.message);
  })
app.listen(process.env.PORT,()=>{
    console.log(`listening to port ${process.env.PORT}`);
})