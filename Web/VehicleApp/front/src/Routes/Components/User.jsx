import React, { useEffect, useState } from "react";
import Navbar from "../../SubComponents/Components/Navbar.jsx";
import axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import Listing from "../../SubComponents/Components/Listing.jsx";
import "../CSS/User.css";

const User = () => {
  const [userData, setUserData] = useState(undefined);
  const [carList, setCarList] = useState([]);

  const getUserData = async () => {
    const token = Cookies.get("User");

    if (token) {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/user/findUser/${
            jwtDecode(token).findUser._id
          }`
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
          listings.map((listing, index) => (
            <div key={index}>
              <Listing {...listing} />
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
            <h1 className="username">{userData.username}</h1>
            <div>Current car listing: {userData.data.length}</div>
            <div className="carList">{carList}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default User;
