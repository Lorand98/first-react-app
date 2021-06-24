import UserInput from "./UserInput";
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
    props.onAddUser({ ...user, id: Math.random() });
    setUser({ name: "", age: "" });
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
      <button type="submit">Add User</button>
    </form>
  );
}

export default UserInputForm;
