'use client';
import { signOut, useSession } from "next-auth/react";
import { CiLogout } from "react-icons/ci";

const Login = () => {

  const {data : session} = useSession()

  return (
    <div className="absolute bottom-2 right-4">
      {session.user.email ? 
      (<button onClick={signOut} className='bg-blue-600 flex gap-2 items-center px-4 py-2 rounded-md text-white font-semibold border-none'>Logout <CiLogout /></button>) 
      :(<button className='bg-blue-600 px-4 py-2 rounded-md text-white font-semibold border-none'>Login</button>)}
        
    </div>
  )
}

export default Login