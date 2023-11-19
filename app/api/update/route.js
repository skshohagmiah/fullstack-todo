
import { connectToDB } from "@/components/connectToDb";
import { Todo } from "@/components/modals";

export const PUT = async(req) => {
    try {
        const {id,text} = await req.json();
        console.log(id, text)
        connectToDB()
        const todo =  await Todo.findById(id);
        todo.body = text;
        await todo.save()
        return Response.json({message:'success'}, {status:200})
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}