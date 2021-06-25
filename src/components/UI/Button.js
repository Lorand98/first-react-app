import styles from "./Button.module.css";

function Button(props) {
  const classes = `${styles["btn-primary"]}  ${props.className}`;
  return (
    <button
      className={classes}
      type={props.isSubmit && "submit"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
