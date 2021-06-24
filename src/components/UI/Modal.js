import styles from "./Modal.module.css";
import Card from "./Card";
import Button from "./Button";

function Modal(props) {
  return (
    <Card className={styles.modal}>
      <h1 className={styles.header}>Invalid Input</h1>
      <p className={styles.message}>{props.children}</p>
      <Button onClick={props.onClose} className={styles["modal-btn"]}>
        Okay
      </Button>
    </Card>
  );
}

export default Modal;
