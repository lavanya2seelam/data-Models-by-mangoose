import mongoose from "mongoose";

const orderDetails=new mongoose.Schema({
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    productQuantity:{
        type:Number,
        default:0
    }
})

const orderSchema=new mongoose.Schema({
    orderedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    address:{
        type:String,
        required:true,
    },
    mobileNo:{
        type:String,
        required:true
    },
    alternateNo:{
        type:String,
        default:""  
    },
    paymentMethod:{
        type:String,
        enum:['cash_on_delivery','pay_online'],
        default:'cash_on_delivery'
    },
    orderItems:{
        type:[orderDetails]
    },
    orderStatus:{
        type:String,
        enum:['PENDING','PROCESS','CANCELLED'],
        default:'PENDING'
    },
    price:{
        type:Number,
        required:true,
        default:0
    },
    orderTotal:{
        type:Number,
        default:0
    },
    resellingOrder:{
        type:Boolean
    }

},{timestamps:true});

export const Order=mongoose.model("Order",orderSchema);