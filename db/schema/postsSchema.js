import { Schema } from "mongoose";

export const postsSchema = new Schema({
    title: {
        type: String
    },
    details: {
        type: String
    },
    comments: [
        {
            type:Schema.Types.ObjectId,
            ref:"Comment"
        }
    ]
});


