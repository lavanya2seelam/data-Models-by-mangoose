import mongoose from "mongoose";
const categorySchema=new mongoose.Schema({
  categoryName:{
    type:String,
    required:[true,"you have to enter category"],
    unique:true
  },
  createdBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  }
},
{timestamps:true})

export const Category=mongoose.model("Category",categorySchema);