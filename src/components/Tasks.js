import React from 'react'
import { useStateContext } from '../context/ContextProvider'
import Task from './Task'

const Tasks = () => {
  const { tasks } = useStateContext()
  return (
    <section>
      <div className='flex flex-col gap-2'>
        <div className='flex justify-center py-4'>
          <p className='text-xl font-semibold bg-yellow-400 rounded-lg p-2'>Number of Tasks : {tasks.length}</p>
        </div>
        <div className='flex flex-wrap gap-4 justify-center'>
          {tasks.map((item) => <div key={item.id}><Task item={item} /></div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Tasks