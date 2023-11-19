import { connectToDB } from "@/components/connectToDb";
import { Todo } from "@/components/modals";

export const POST = async(req) => {
    try {
        const {id} = await req.json();
        connectToDB()
        await Todo.findByIdAndDelete(id)
        return Response.json({message:'success'}, {status:200})
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

export const PUT = async(req) => {
    try {
        const {id,completed} = await req.json();
        console.log(id)
        connectToDB()
        const todo =  await Todo.findById(id);
        todo.completed = !completed;
        await todo.save()
        return Response.json({message:'success'}, {status:200})
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

export const PATCH = async(req) => {
    try {
        const {id,body} = await req.json();
        console.log(id)
        connectToDB()
        const todo =  await Todo.findById(id);
        todo.body = body;
        await todo.save()
        return Response.json({message:'success'}, {status:200})
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}