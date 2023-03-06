import React from "react";
import Taskcard from "../Taskcard/Taskcard";
import styles from "./Tasklist.module.css"

function Tasklist({ tasks }) {
  return (
    <div className={styles.tasklist}>
      {tasks && tasks.length > 0 ? (
        tasks.map((task) => <Taskcard key={task.id} task={task} />)
      ) : (
        <div className="">
          {" "}
          <h2>No Task yet</h2>{" "}
        </div>
      )}
    </div>
  );
}

export default Tasklist;
