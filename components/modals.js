import mongoose from 'mongoose';
const todoSchema = new mongoose.Schema({
    body:String,
    completed:{
        type:Boolean,
        default:false
    },
},{timestamps:true});

export const Todo = mongoose.models.Todo || mongoose.model('Todo', todoSchema);