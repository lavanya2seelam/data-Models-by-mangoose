import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
username:{
    type:String,
    required:[true,"you have to enter username"],
    lowercase:true,
    unique:true
},
email:{
    type:String,
    required:[true,"you have to enter password"],
    lowercase:true,
    unique:true
},
password:{
    type:String,
    required:[true,"you have to enter password"]
}
},
{timestamps:true});

export const User=mongoose.model("User",userSchema);