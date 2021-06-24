import styles from "./UserInput.module.css";

function UserInput(props) {
  return (
    <div className={styles["input_container"]}>
      <label>{props.label}</label>
      <input
        type={props.type}
        value={props.children}
        name={props.name}
        onChange={props.onChangeInput}
      />
    </div>
  );
}

export default UserInput;
