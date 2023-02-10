import React from 'react'
import { MdDelete, MdEdit } from "react-icons/md"
import { useStateContext } from '../context/ContextProvider'

const Task = ({ item }) => {
  const { deleteTask, editTask } = useStateContext()
  return (
    <div className='w-64 h-36 bg-yellow-200 rounded-lg'>
      <div className="flex h-full flex-col justify-between">
        <div>
          <p className='text-center p-2 text-lg'>Task : {item.text}</p>
        </div>
        <div className='flex flex-row justify-between items-center p-4'>
          <div className='flex flex-col'>
            <p>Due : </p>
            <p>{item.day}</p>
          </div>
          <div className='flex flex-row gap-4'>
            <MdEdit onClick={() => editTask(item.id)} size={20} className="rounded-full cursor-pointer text-green-500 hover:scale-110 hover:text-green-600" />
            <MdDelete size={20} onClick={() => deleteTask(item.id)} className=" rounded-full cursor-pointer text-red-500 hover:scale-110 hover:text-red-600" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Task