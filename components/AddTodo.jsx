import { getServerSession } from 'next-auth/next'
import { revalidatePath } from 'next/cache'
import { connectToDB } from './connectToDb'
import { Todo, User } from './modals'
import { options } from './options'
const AddTodo = async() => {

const create = async(formData) => {
    'use server'

    try {
      connectToDB()
     const data = formData.get('content')
     const session = await getServerSession(options)
     const user = await User.findOne({email:session.user.email});
      if(user){
        await Todo.create({body:data, userId:user._id});
        revalidatePath('/')
      }
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