import mongoose, { Schema } from "mongoose";


const noteSchema=new Schema({
    title:String,
    description:String,
    user_id:{
        type:Schema.Types.ObjectId,
        ref:'user'
    }
},{timestamps:true})

export const noteModel = mongoose.model('note',noteSchema)