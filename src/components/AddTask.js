import React from 'react'
import { useStateContext } from '../context/ContextProvider'
import Button from "./Button"

const AddTask = () => {
  const { addTask, text, setText, day, setDay, priority, setPriority } = useStateContext()

  return (
    <section className='flex justify-center items-center '>

      <form onSubmit={addTask} className="p-6 rounded-md">
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
        <div className='md:flex md:items-center mb-6'>
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-center mb-1 md:mb-0 pr-4" for="grid-state">
              Priority
            </label>
          </div>
          <div className="relative md:w-2/3">
            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-violet-400" id="grid-state">
              <option value="1">High</option>
              <option value="2">Medium</option>
              <option value="3">Low</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </div>
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