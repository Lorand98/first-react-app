import User from "./User";
import styles from "./UserList.module.css";

function UserList(props) {
  return props.users.length !== 0 ? (
    <ul>
      {props.users.map((user) => (
        <User name={user.name} age={user.age} key={user.id}></User>
      ))}
    </ul>
  ) : (
    <div className={styles["no-user__message"]}>
      <p>Once you will add users, they will show up here</p>
    </div>
  );
}

export default UserList;
