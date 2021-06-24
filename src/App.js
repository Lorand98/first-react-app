import UserInputForm from "./components/UserInput/UserInputForm";
import Card from "./components/UI/Card";
import UserList from "./components/UserList/UserList";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  function addUser(user) {
    setUsers((prevState) => [...prevState, user]);
  }
  return (
    <div>
      <Card>
        <UserInputForm onAddUser={addUser} />
      </Card>
      <Card>
        <UserList users={users} />
      </Card>
    </div>
  );
}

export default App;
