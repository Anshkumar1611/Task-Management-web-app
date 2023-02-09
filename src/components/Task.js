import React from 'react'
import { MdDelete, MdEdit } from "react-icons/md"

const Task = () => {
  return (
    <div className='w-64 h-48 bg-yellow-400 rounded-lg'>
      <div className="flex h-full flex-col justify-between">
        <div>
          <p className='text-center p-2 text-lg'>Here comes your task</p>
        </div>
        <div className='flex flex-row justify-between items-center p-4'>
          <div className='flex flex-col '>
            <p>Monday</p>
            <p>16/11/2000</p>
          </div>
          <div className='flex flex-row gap-4'>
            <MdEdit size={20} className="rounded-full cursor-pointer text-green-500 hover:scale-110 hover:text-green-600" />
            <MdDelete size={20} className=" rounded-full cursor-pointer text-red-500 hover:scale-110 hover:text-red-600" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Task