import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        password: {
            type: String,
            required: [true, "password is required"],
            unique: true,
            lowercase: true
        }
    },{timestamps: true}
)
//timestamps is used to create logs in the database

export const User = mongoose.model("User", userSchema)
//convert to "users" when goes in mongo lowercase and in plural
// name of the table in Mongoose