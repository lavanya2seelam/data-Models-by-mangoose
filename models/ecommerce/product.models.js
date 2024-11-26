import mongoose from "mongoose";

const productSchema=new mongoose.Schema({

productName:{
    type:String,
    required:true,
    unique:true
},
description:{
    type:String,
    required:true,
},
createdBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
},
stock:{
    type:Number,
    default:0,
    required:true
},
price:{
    type:Number,
    default:0,
    required:true
},
category:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Category"
},
manufacturer:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
},
importer:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
},
packer:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
},
rating:{
    type:Number,
    default:0.0,
    required:true
},
delivery: { 
    type: String,
    required: true,
    default: 'FREE',
    enum: ['FREE', 'STANDARD', 'EXPRESS'] 
},
discount: {
    type: Number,
    default: 0,
    min: [0, 'Discount cannot be negative'],
    max: [10000, 'Discount cannot exceed 100%']
}
,
offers:{
    type:Number,
    default:0
}
},
{timestamps:true});

export const Product=mongoose.model("Product",productSchema);