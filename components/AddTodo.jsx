
import { revalidatePath } from 'next/cache'
import { connectToDB } from './connectToDb'
import { Todo } from './modals'
const AddTodo = () => {

const create = async(formData) => {
    'use server'
    try {
     const data = formData.get('content')

      connectToDB()
      await Todo.create({body:data});
      revalidatePath('/')
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <form action={create} >
        <label htmlFor="todo" className="font-semibold text-2xl">Your Todo</label>
       <div className="flex gap-2">
       <input className="w-full p-2  text-black border-2 rounded border-gray-800" id='todo' type="text"  name="content" placeholder='Add a Todo' />
       <input type="submit"  className="bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer" />
       </div>
    </form>
  )
}

export default AddTodo