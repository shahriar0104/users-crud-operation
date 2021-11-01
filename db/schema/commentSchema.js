import { Schema } from "mongoose";

export const commentSchema = new Schema({
    postId:{
        type:Schema.Types.ObjectId,
        ref:"Post",
        required:true
    },
    commentor:{
        type:String
    },
    commentDetails:{
        type:String
    }
})