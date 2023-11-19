'use client'
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Modal = ({id,body,closeModal}) => {

    const router = useRouter()
    const [text,setText] = useState('');

    const update = async() => {
        try {
            await axios.put('api/update',{id,text})
            
          } catch (error) {
            console.log('failed to call api');
          }
          finally{
            closeModal()
            router.refresh()
          }
    }

  return (
    <div className="mt-[-3rem] text-gray-700 flex items-center p-2 text-lg gap-2  border rounded border-gray-200 cursor-pointer">
    <form onSubmit={(e) => e.preventDefault()} className="flex w-[80%] gap-3">
    <input type='text'  onChange={(e) => setText(e.target.value)} className="w-full border-none p-1 rounded" placeholder={body}/>
    <button onClick={update} className=" bg-gray-900 p-1 rounded cursor-pointer text-white">
        Update
    </button>
    </form>
    </div>
  )
}

export default Modal