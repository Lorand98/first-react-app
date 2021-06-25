import UserInputForm from "./components/UserInput/UserInputForm";
import Card from "./components/UI/Card";
import UserList from "./components/UserList/UserList";
import Modal from "./components/UI/Modal";
import { useState } from "react";
import styles from "./App.module.css";

function App() {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState("");

  function addUser(user) {
    setUsers((prevState) => [...prevState, user]);
  }

  function setErrorMessage(msg) {
    setModalText(msg);
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  return (
    <div>
      <div className={showModal ? styles.backdrop : ""} />
      <Card>
        <UserInputForm onAddUser={addUser} setErrorMessage={setErrorMessage} />
      </Card>
      <Card>
        <UserList users={users} />
      </Card>

      {showModal && <Modal onClose={closeModal}>{modalText}</Modal>}
    </div>
  );
}

export default App;
