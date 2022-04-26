import React, { useState } from "react";
import "./index.css";
import axios from "axios";

export default function Problem2() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);

  const deleteUserRecord = (t) => {
    const tempUserData = userData;
    const result = tempUserData.filter(function (item) {
      return t !== item;
    });
    setUserData(result);
  };

  const fetchUserRecord = async () => {
    setLoading(true);

    var maxNumber = 100;
    var randomNumber = Math.floor(Math.random() * maxNumber + 1);
    await axios({
      method: "GET",
      url: ` https://swapi.dev/api/people/${randomNumber}`,
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => {
        const tempUserData = userData.slice();
        tempUserData.push(res.data);
        setUserData(tempUserData);
        setLoading(false);
      })
      .catch(() => {
        fetchUserRecord();
      });
  };

  return (
    <div className="problem2">
      <h1>Problem 2</h1>
      <p>Add user record by calling API and delete user record</p>

      <div className="AddUserRecord">
        <button onClick={fetchUserRecord}>Add record</button>
      </div>
      <div className="usersRecord">
        {loading && <p>Please wait for moment</p>}
        <table>
          <tr>
            <th>Name</th>
          </tr>

          {userData?.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item?.name}</td>

                <td>
                  <button
                    disabled={loading}
                    onClick={() => deleteUserRecord(item)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}
