import React, { useState } from 'react'
import { useStateContext } from '../context/ContextProvider'
import Button from "./Button"
import { v4 as uuidv4 } from 'uuid';


const AddTask = () => {
  const [text, setText] = useState("")
  const [day, setDay] = useState("")

  // const { setTasks, tasks } = useStateContext()

  // const addTask = (e) => {
  //   const id = uuidv4();
  //   const newTask = { id, text, day }
  //   console.log(text, day);
  //   e.preventDefault()
  //   setTasks([...tasks, newTask])
  // }

  return (
    <section className='flex justify-center items-center'>
      <form  >
        <div className='md:flex md:items-center mb-6'>
          <div className="md:w-1/3">
            <label htmlFor="task" className='block text-gray-500 font-bold md:text-center mb-1 md:mb-0 pr-4'>Task</label>
          </div>
          <div className="md:w-2/3">
            <input type="text" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" placeholder="Enter your Task" name="task" value={text} onChange={(e) => setText(e.target.value)} />
          </div>
        </div>
        <div className='md:flex md:items-center mb-6'>
          <div className="md:w-1/3">
            <label htmlFor="day" className='block text-gray-500 font-bold md:text-center mb-1 md:mb-0 pr-4'>Day & Time</label>
          </div>
          <div className="md:w-2/3">
            <input type="text" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-violet-400 " placeholder="day & time" name="day" value={day} onChange={(e) => setDay(e.target.value)} />
          </div>
        </div>
        <div className='flex justify-end'>
          <Button text={"Add Task"} />
        </div>
      </form>
    </section>
  )
}

export default AddTask