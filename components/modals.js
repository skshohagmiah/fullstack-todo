import mongoose, { Schema } from 'mongoose';



const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    img: String
}, { timestamps: true });

export const User = mongoose.models.User || mongoose.model('User', userSchema);


const todoSchema = new mongoose.Schema({
    body: String,
    completed: {
        type: Boolean,
        default: false
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",// Use "ref" instead of "Ref",
    },
}, { timestamps: true });

export const Todo = mongoose.models.Todo || mongoose.model('Todo', todoSchema);