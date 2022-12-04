import axios from "axios";
import { useEffect, useState } from "react";

const FetchData = () => {
  const [user, setUser] = useState([]);
  const getUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addUser = () =>{
    axios.post("endpoint" ,{
        userName: "Sajib",
        email: "email",
    })
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      {user.map((specificUser, index) => (
        <div key={index}>
          <h1 className="text-2xl text-center font-bold">
            {specificUser.name}
          </h1>
          <h3>{specificUser.email}</h3>
        </div>
      ))}
      <h1>This is fetch data component</h1>
      <button
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded ml-8"
        onClick={() => getUsers()}
      >
        get users
      </button>
    </div>
  );
};

export default FetchData;
