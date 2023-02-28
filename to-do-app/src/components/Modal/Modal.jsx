import React, { children } from 'react'
import styles from "./Modal.module.css"

export const Modal = ({children}) => {
  return (
    <div className={styles.container}>
{children}
    </div>
  )
}
