import { Schema } from "mongoose";

export const studentSchema = new Schema({
    userName:{
        type: String,
        unique: true
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
})