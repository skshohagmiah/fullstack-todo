import { connectToDB } from './connectToDb';
import { Todo } from './modals';
import SingleTodo from './singleTodo';

const getTodos = async() => {
  connectToDB()
  const todos = await Todo.find();
  return todos;
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