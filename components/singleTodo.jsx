'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { AiFillDelete, AiFillEdit, AiOutlineCheck } from 'react-icons/ai';
import Modal from './Modal';

const SingleTodo = ({id,completed,body}) => {

  const [open, setOpen] = useState(false)

  const closeModal = () => {
    setOpen(false)
  }

  const router = useRouter()

  const handleDelete = async() => {
    try {
      await axios.post('api/todo',{id})
      
    } catch (error) {
      console.log('failed to call api');
    }
    finally{
      router.refresh()
    }
  }

  const handleComplete = async() => {
    try {
      await axios.put('api/todo',{id,completed})
      
    } catch (error) {
      console.log('failed to call api');
    }
    finally{
      router.refresh()
    }
  }

  return (
    <>
            <li className={completed ?"line-through mt-2 flex items-center p-2 text-xl gap-2 border rounded border-gray-700 cursor-pointer" :"flex items-center p-2 text-xl gap-2 mt-2 border rounded border-gray-200 cursor-pointer"}>
                <span onClick={handleComplete} className='flex-1 text-gray-300'>{body}</span>
                <span className='m-2' onClick={() => setOpen(!open)}><AiFillEdit/></span>
                <span className='m-2' onClick={handleComplete}><AiOutlineCheck /></span>
                <span className='m-2' onClick={handleDelete}><AiFillDelete /></span>
            </li>
            {open && <Modal closeModal={closeModal} id={id} body={body}/>}
    </>
  )
  }

export default SingleTodo;