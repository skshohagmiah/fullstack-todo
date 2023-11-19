import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";

export default async function Home() {



  

  return (
   <div className=' font-bold font-xl py-2 px-4 md:p-8'>
    <AddTodo />
    <TodoList />
   </div>
  )
}
