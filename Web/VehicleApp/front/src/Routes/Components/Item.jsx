import React, { useEffect, useState } from "react";
import Navbar from "../../SubComponents/Components/Navbar.jsx";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../CSS/Item.css";
const Item = () => {
  const imageArray = [
    "https://i.imgur.com/8WjcthU.jpeg",
    "https://i.imgur.com/3kBANEa.jpeg",
    "https://i.imgur.com/qbLCVbr.jpeg",
    "https://i.imgur.com/fIVcvs8.jpeg",
    "https://i.imgur.com/ZYBBqWe.jpeg",
    "https://i.imgur.com/SCX0N9m.jpeg",
    "https://i.imgur.com/B4Y6Wp7.jpeg",
    "https://i.imgur.com/3Jtwyuk.jpeg",
    "https://i.imgur.com/ovfjHB2.jpeg",
  ];
  const params = useParams();
  const [currentImg, setCurrentImg] = useState(imageArray[0]);
  const [data, setData] = useState();
  const [user, setUser] = useState();

  const fetchData = async () => {
    await axios
      .get(`http://localhost:3000/api/car/findById/${params.id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(async () => {
    fetchData();
  }, []);

  useEffect(async () => {
    console.log(data);
    if (data) {
      await axios
        .get(`http://localhost:3000/api/user/findByID/${data.owner}`)
        .then((res) => {
          console.log(res);
          setUser(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [data]);

  return (
    <div className="itemMain">
      <Navbar />
      {data && user && (
        <div className="itemContent">
          <div className="middle">
            <div className="gallery">
              <div className="mainphoto">
                <img src={currentImg} alt="car img" />
              </div>
              <div className="photos">
                {imageArray.map((value, index) => (
                  <img
                    onClick={() => setCurrentImg(value)}
                    src={value}
                    alt="car image"
                    key={index}
                  />
                ))}
              </div>
            </div>
            <div className="information">
              <span>{data.brand}</span>
              <span>{data.model}</span>
              <span>
                {data.price}
                {data.currency}
              </span>
              <span>{data.condition}</span>
              <span>
                {data.country},{data.county},{data.city}
              </span>
              <span></span>
              <span>Private seller</span>
              <span>0787777947</span>
            </div>
          </div>
          <div className="bottom">
            <span>Post description:</span>
            <p>
              Nam in sagittis velit. Suspendisse commodo malesuada lorem sit
              amet accumsan. Pellentesque neque felis, suscipit at lectus
              tempor, blandit euismod sapien. In eleifend, velit quis vestibulum
              ullamcorper, leo dui vehicula libero, in ullamcorper magna magna
              et urna. Duis congue feugiat vehicula. Sed sit amet maximus purus.
              Donec eget arcu tempor, rhoncus enim ac, lacinia felis. Nam libero
              enim, efficitur id enim id, gravida dapibus tellus. Duis efficitur
              tincidunt vestibulum. Curabitur dolor orci, consectetur vitae
              neque a, scelerisque maximus sapien. Fusce tincidunt eleifend
              tortor, sit amet vehicula tortor faucibus non. Vestibulum sit amet
              dui quis felis bibendum posuere.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Item;
