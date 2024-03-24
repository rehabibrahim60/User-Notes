import mongoose, { Schema } from "mongoose";

const userSchema=new Schema({
    name:String,
    email:String,
    password:String
},{timestamps:true})

export const userModel = mongoose.model('user',userSchema)