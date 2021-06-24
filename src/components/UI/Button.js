import "./Button.module.css";

function Button(props) {
  return (
    <button
      className={props.className}
      type={props.isSubmit && "submit"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
