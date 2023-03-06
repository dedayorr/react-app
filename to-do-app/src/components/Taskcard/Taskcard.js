import React, { useState } from "react";
import styles from "./Taskcard.module.css";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { BsShareFill } from "react-icons/bs";

function Taskcard({ task }) {
  const [count, setCount] = useState(0)
  const truncate = (str, num) => {
    if (str.length > num) {
      if (str.length > num) {
        str = str.substring(0, num) + "...";
        return str;
      }
    }
  };
  return (
    <div className={styles.cover}>
      <div className={styles.card}>
        <div>
          <h1>{task.title}</h1>
          <p>{task.desc}</p>
          <p>{task.date}</p>
        </div>

        <div className={styles.icons}>
          <div className={styles.subicon}>
            <RiDeleteBinLine />
            <FaEdit />
          </div>
          <div>
          <BsShareFill/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Taskcard;

// Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptatem quo nulla voluptate fugiat possimus ipsa eum sed. Inventore, itaque.
