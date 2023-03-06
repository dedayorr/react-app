import React, { useEffect } from "react";
import { AddTask } from "../components/AddTask/AddTask";
import { useState } from "react";
import { Modal } from "../components/Modal/Modal";
import "./Task.css";
import Tasklist from "../components/Tasklist/Tasklist";
import { UpdateTask } from "../components/UpdateTask/UpdateTask";

export const Tasks = () => {
  const [openCreateTask, setOpenCreateTask] = useState(false);
  const [openUpdateTask, setOpenUpdateTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks();
  }, [openCreateTask]);

  function getTasks() {
    const tasks = localStorage.getItem("tasks");
    const tasksJSON = JSON.parse(tasks);
    console.log(tasksJSON);
    setTasks(tasksJSON);
  }

  return (
    <div>
      <button onClick={() => setOpenCreateTask(true)} className="btn-four">
        New Task
      </button>

      {/* create task */}
      {openCreateTask && (
        <Modal>
          <AddTask setOpenCreateTask={setOpenCreateTask} />
        </Modal>
      )}

      {/* update task */}
      {openUpdateTask && (
        <Modal>
          <UpdateTask setOpenUpdateTask={setOpenUpdateTask} />
        </Modal>
      )}

      <Tasklist tasks={tasks} />
    </div>
  );
};
