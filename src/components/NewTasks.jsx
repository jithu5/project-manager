import React, { useState } from 'react'

function NewTasks({onAdd}) {
    const [enteredTask, setEnteredTask] = useState('')

    function handleChange(e) {
        setEnteredTask(e.target.value)
    }

    function handleClick() {
        onAdd(enteredTask)
        setEnteredTask('')
    }
  return (
    <div className='flex items-center gap-4'>
      <input value={enteredTask} onChange={handleChange} className='w-64 px-2 py-1 rounded-sm bg-stone-200' type="text" />
      <button onClick={handleClick} className='text-stone-700 hover:text-stone-950'>Add Tasks</button>
    </div>
  )
}

export default NewTasks
