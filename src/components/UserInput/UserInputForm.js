import "./UserInputForm.module.css";
import UserInput from "./UserInput";

function UserInputForm() {
  return (
    <form>
      <UserInput type="text">Username</UserInput>
      <UserInput type="number">Age (Years)</UserInput>
      <button type="submit">Add User</button>
    </form>
  );
}

export default UserInputForm;
