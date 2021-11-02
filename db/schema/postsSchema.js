import { Schema } from "mongoose";

export const postsSchema = new Schema({
    title: {
        type: String
    },
    owner:{
        type: String
    },
    details: {
        type: String
    },
    time:{
        type: String,
        default: new Date().toString()
    },
    comments: [
        {
            type:Schema.Types.ObjectId,
            ref:"Comment"
        }
    ]
});


