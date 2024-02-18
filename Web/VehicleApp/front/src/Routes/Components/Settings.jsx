import React, { useEffect, useState } from "react";
import "../CSS/Settings.css";
import Navbar from "../../SubComponents/Components/Navbar";
import axios from "axios";
import { useParams } from "react-router";

const Settings = () => {
  const params = useParams();
  const [user, setUser] = useState();

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setCOnfirmPassword] = useState();
  const [phone, setPhone] = useState();

  const getData = async () => {
    await axios
      .get(`http://localhost:3000/api/user/findUser/${params.id}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div className="settingsMain">
      <Navbar />
      {user && (
        <div className="settingsContent">
          <div className="label">
            <span>First name:</span>
            <input
              onChange={(event) => {
                setFirstName(event.target.value);
              }}
              type="text"
              name=""
              id=""
              placeholder=""
            />
          </div>
          <div className="label">
            <span>Last name:</span>
            <input
              onChange={(event) => {
                setLastName(event.target.value);
              }}
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="label">
            <span>Email:</span>
            <input placeholder={user.email} type="email" name="" id="" />
          </div>
          <div className="label">
            <span>Password:</span>
            <input type="password" name="" id="" />
          </div>
          <div className="label">
            <span>Confirm:</span>
            <input type="password" name="" id="" />
          </div>
          <div className="label">
            <span>Phone:</span>
            <input placeholder={user.phone} type="text" name="" id="" />
          </div>
          <span className="submit">Update details</span>
        </div>
      )}
    </div>
  );
};

export default Settings;
