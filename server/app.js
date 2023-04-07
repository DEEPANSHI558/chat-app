const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const userRoute=require("./routes/userRoute")
require("dotenv").config();

const app=express();

app.use(cors());
app.use(express.json());
app.use("/api/auth",userRoute); 

// connection to mongodb
mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: "true",
  useUnifiedTopology: "true"}).then(()=>{
    console.log("DB connection successful")
  }).catch((err)=>{
    console.log(err.message);
  })
app.listen(process.env.PORT,()=>{
    console.log(`listening to port ${process.env.PORT}`);
})