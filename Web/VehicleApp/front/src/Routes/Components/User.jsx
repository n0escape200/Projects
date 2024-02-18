import React, { useEffect, useState } from "react";
import Navbar from "../../SubComponents/Components/Navbar.jsx";
import axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import Listing from "../../SubComponents/Components/Listing.jsx";
import { useNavigate } from "react-router";
import "../CSS/User.css";

const User = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(undefined);
  const [carList, setCarList] = useState([]);
  const id = jwtDecode(Cookies.get("User")).findUser._id;

  const getUserData = async () => {
    if (id) {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/user/findUser/${id}`
        );
        setUserData(res.data);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const getCarData = async () => {
    if (userData) {
      try {
        const promises = userData.data.map(async (element) => {
          const res = await axios.get(
            `http://localhost:3000/api/car/findById/${element}`
          );
          return {
            id: element,
            type: "portrait",
            brand: res.data.brand,
            model: res.data.model,
            km: res.data.km,
            cc: res.data.cc,
            year: res.data.year,
            fuel: res.data.fuel,
            price: res.data.price,
            currency: res.data.currency,
          };
        });

        const listings = await Promise.all(promises);
        setCarList(
          listings.map((item, index) => (
            <div key={index}>
              <Listing {...item} />
            </div>
          ))
        );
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    if (userData) {
      getCarData();
    }
  }, [userData]);

  return (
    <div className="userMain">
      <div className="userContent">
        <Navbar />
        {!userData ? (
          <div>LOADING...</div>
        ) : (
          <div className="userData">
            <span className="username">{userData.username}</span>
            <span
              onClick={() => {
                navigate(`/user/settings/${id}`);
              }}
              className="settings"
            >
              Settings
            </span>
            <div>Current car listing: {userData.data.length}</div>
            <div className="carList">{carList}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default User;
