import React from 'react'
import { AddTask } from '../components/AddTask/AddTask'
import { useState } from 'react'
import { Modal } from '../components/Modal/Modal'
import "./Task.css"

export const Tasks = () => {
  const [openCreateTask, setOpenCreateTask] = useState(false)
  return (
    <div>
      <button onClick={()=>setOpenCreateTask(true)} className='btn-four'>New Task</button>
      {openCreateTask && <Modal><AddTask setOpenCreateTask={setOpenCreateTask}/></Modal>}
      
    </div>
  )
}
