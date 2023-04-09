const User =require("./models/User")
const bcrypt = require ('bcrypt');

module.exports.register=async(req,res,next)=>{
    console.log(req.body);
    const {username,password,email}=req.body;
    // get the username and check if it is present in the data or not
    const usernameCheck=await User.findOne({username});
    if(!usernameCheck){
       return  res.json({msg:"Username already exists",status:false});
    }
    const emailCheck=await User.findOne({email});
    if(emailCheck){
       return res.json({msg:"Email already exists",status:false});
    }
    // we have to hash the password first to be safe atleast hehe
    const hashedPassword=await bcrypt.hash(password,10);
    // 10 here is the number of salt rounds in this 
    const user=new User.create({
        username,
        email,
        password:hashedPassword,
    });
    user.save();
    // deconstruct the user object returned and then use the others
    return res.json({})

}

module.exports.login=(req,res,next)=>{
    console.log(req.body);
}