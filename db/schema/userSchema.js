import { Schema } from "mongoose";
import bcrypt from "bcryptjs"

export const userSchema = new Schema({
    username:{
        type: String,
        unique: true,
        required:true
    },
    email:{
        type:String
    },
    password:{
        type:String,
        select: false
    },
    role:{
        type:String
    }
})

userSchema.pre('save', async function(next) {
    this.password = await bcrypt.hash(this.password, 7)
    next()
})

userSchema.methods.matchPasswords = async(givenPassword, actualPassword) => {
    return await bcrypt.compare(givenPassword, actualPassword)
}

