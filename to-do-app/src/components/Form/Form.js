import { React, useState } from "react";
import styles from "./Form.module.css";

const Form = ({ func }) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");

  function nameHandler(e) {
    setUserName(e.target.value);
  }
  function passwordHandler(e) {
    setPassword(e.target.value);
  }
  function mailHandler(e) {
    setMail(e.target.value);
  }

  return (
    <div>
      <form className={styles.formed}>
        <p>LOGIN</p>
        <input
          type="text"
          value={username}
          placeholder="Enter your username"
          onChange={nameHandler}
        />
        <input
          type="email"
          value={mail}
          placeholder="Enter your mail"
          onChange={mailHandler}
        />
        <input
          type="password"
          value={password}
          placeholder="Enter your password"
          onChange={passwordHandler}
        />
        <button className={styles.btn}>Submit</button>
        <div className={styles.regLink} onClick={() => func(false)}>
          Don't have an account? Register here
        </div>
      </form>
    </div>
  );
};

export default Form;
