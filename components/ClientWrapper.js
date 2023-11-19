'use client';
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";

export default function ClientWrapper({children}) {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
      {children}
      </>
    )
  }
  return (
    <div className="flex items-center justify-center md:text-3xl text-white flex-col gap-2 h-screen">
     You Are Not Signed In <br />
      <button className="flex gap-6 justify-center rounded-md items-center mt-2 p-4 bg-slate-700 hover:opacity-60" onClick={() => signIn('google')}>
        <span>Sign in With Google</span>
        <Image src={`/Google_2011_logo.png`} alt="google" height={120} width={120}/>
        </button>
    </div>
  )
}