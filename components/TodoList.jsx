import { getServerSession } from 'next-auth/next';
import { connectToDB } from './connectToDb';
import { Todo, User } from './modals';
import { options } from './options';
import SingleTodo from './singleTodo';

const getTodos = async() => {
  connectToDB()
  const session = await getServerSession(options)
  const user = await User.findOne({email:session.user.email});
  if(user._id){
    const todos = await Todo.find({userId:user._id})
    console.log(todos)
    return todos;
  }
}

const TodoList = async() => {
  
  const todos = await getTodos();

  // <singleTodo />
  return (
    <div className='mt-4'>
        {todos.map((todo) => (
           <SingleTodo key={todo.id} completed={todo.completed} id={todo.id} body={todo.body} />
        )
        )}

    </div>
  )
}

export default TodoList