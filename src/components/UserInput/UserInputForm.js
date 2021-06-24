import UserInput from "./UserInput";
import Button from "../UI/Button";
import { useState } from "react";

function UserInputForm(props) {
  const [user, setUser] = useState({
    name: "",
    age: "",
  });

  function setUserHandler(e) {
    const { name, value } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  }

  function addUserHandler(e) {
    e.preventDefault();
    if (user.name.trim() === "" || user.age.trim() === "") {
      props.setErrorMessage(
        "Please enter a valid name and age (non-empty values)."
      );
      setUser({ name: "", age: "" });
      return;
    }

    if (user.age < 0) {
      props.setErrorMessage("Please enter a valid age (>0).");
      setUser({ name: "", age: "" });
      return;
    }
    setUser({ name: "", age: "" });
    props.onAddUser({ ...user, id: Math.random() });
  }

  return (
    <form onSubmit={addUserHandler}>
      <UserInput
        type="text"
        label="Username"
        name="name"
        onChangeInput={setUserHandler}
      >
        {user.name}
      </UserInput>
      <UserInput
        type="number"
        label="Age (Years)"
        name="age"
        onChangeInput={setUserHandler}
      >
        {user.age}
      </UserInput>
      <Button isSubmit={true}>Add User</Button>
    </form>
  );
}

export default UserInputForm;
