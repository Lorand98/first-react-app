import styles from "./UserInput.module.css";
import { useState } from "react";

function UserInput(props) {
  const [inputText, setInputText] = useState("");

  function inputChangeHandler(e) {
    setInputText(e.target.value);
  }

  return (
    <div className={styles["input_container"]}>
      <label>{props.children}</label>
      <input
        type={props.type}
        value={inputText}
        onChange={inputChangeHandler}
      />
    </div>
  );
}

export default UserInput;
