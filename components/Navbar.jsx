import Login from "./Login"
import User from "./User"

const Navbar = () => {
  return (
    <div className="p-4 md:px-8  flex justify-between items-center gap-2">
        <div className="font-bold text-3xl cursor-pointer flex-1">Taskify</div>
        <Login />
        <User />
    </div>
  )
}

export default Navbar