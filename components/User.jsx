'use client'
import { useSession } from "next-auth/react"
import Image from "next/image"

const User = () => {

  const {data : session} = useSession()
  return (
    <div className=' p-2 flex gap-2 bg-slate-400 items-center rounded-xl '>
      <h2  className="flex flex-col"><span className="font-bold text-xl text-white">Hello,</span>{session.user.name}</h2>
      <div className="rounded-full relative w-[3rem] h-[3rem] ring-3"><Image className="rounded-full w-full" src={session.user.image} fill alt="profile"/></div>
    </div>
  )
}

export default User