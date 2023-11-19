'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { AiFillDelete, AiFillEdit, AiOutlineCheck } from 'react-icons/ai';
import Modal from './Modal';

const SingleTodo = ({ id, completed, body }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const closeModal = () => {
    setOpen(false);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`api/todo/${id}`);
      router.reload(); // Reload instead of refresh
    } catch (error) {
      console.error('Failed to call delete API', error);
    }
  };

  const handleComplete = async () => {
    try {
      await axios.put(`api/todo/${id}`, { completed: !completed });
      router.reload(); // Reload instead of refresh
    } catch (error) {
      console.error('Failed to call update API', error);
    }
  };

  const toggleModal = () => {
    setOpen(!open);
  };

  return (
    <>
      <li className={completed ? "line-through mt-2 flex items-center p-2 text-xl gap-2 border rounded border-gray-700 cursor-pointer" : "flex items-center p-2 text-xl gap-2 mt-2 border rounded border-gray-200 cursor-pointer"}>
        <span onClick={handleComplete} className='flex-1 text-gray-300'>{body}</span>
        <button className='m-2' onClick={toggleModal}><AiFillEdit /></button>
        <button className='m-2' onClick={handleComplete}><AiOutlineCheck /></button>
        <button className='m-2' onClick={handleDelete}><AiFillDelete /></button>
      </li>
      {open && <Modal closeModal={closeModal} id={id} body={body} />}
    </>
  );
};

export default SingleTodo;
