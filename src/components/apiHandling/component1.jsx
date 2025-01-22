import { useEffect, useState } from "react";

function ApiHandling() {
  const [apiUsers, setApiUsers] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const userFetching = async () => {
    try {
      const allUsers = await fetch("https://dummyjson.com/users");
      const userList = await allUsers.json();
      {
        userList.users ? setApiUsers(userList.users) : setApiUsers(...apiUsers);
      }
    } catch (err) {
      console.log(err);
    }
  };

  //   console.log(apiUsers);

  useEffect(() => {
    userFetching();
  }, []);

  const findSearchValue = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={findSearchValue}>
        <input
          type="text"
          id="search-input"
          placeholder="type name"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">search name</button>
      </form>

      {console.log()}

      <br />
      <ul>
        {apiUsers.map((user, i) => (
          <li key={i}>
            id:{user.id}, First-name : {user.firstName}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ApiHandling;
