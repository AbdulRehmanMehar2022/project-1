import React, { useEffect, useState } from "react";
import FetchData from "../components/Api";
import Table from "../components/Table";

const Home = () => {
  useEffect(() => {
    fetchData();
  }, []);
  const [userData, setUserData] = useState([]);
  const fetchData = () => {
    FetchData(
      "GET",
      "https://jsonplaceholder.typicode.com/posts/1/comments"
    ).then((res) => {
      setUserData(res);
    });
  };
  const thead = [
    { title: "Id" },
    { title: "Name" },
    { title: "Email" },
    { title: "body" },
  ];

  return (
    <>
    <div className="container">
      <Table thead={thead} className="table table-striped">
        {userData.map((user, index) => {
          return (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.body}</td>
            </tr>
          );
        })}
      </Table></div>
    </>
  );
};
export default Home;