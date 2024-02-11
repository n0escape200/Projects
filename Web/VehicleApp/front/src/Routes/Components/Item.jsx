import React, { useState } from "react";
import Navbar from "../../SubComponents/Components/Navbar.jsx";
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

  const [currentImg, setCurrentImg] = useState(imageArray[0]);

  return (
    <div className="itemMain">
      <div className="itemContent">
        <Navbar />
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
            <span>13 000 EUR</span>
            <span>Used</span>
            <span>Suceava,Radauti</span>
            <span>Mathew Smith</span>
            <span>Private seller</span>
            <span>0787777947</span>
          </div>
        </div>
        <div className="bottom">
          <span>Post description:</span>
          <p>
            Nam in sagittis velit. Suspendisse commodo malesuada lorem sit amet
            accumsan. Pellentesque neque felis, suscipit at lectus tempor,
            blandit euismod sapien. In eleifend, velit quis vestibulum
            ullamcorper, leo dui vehicula libero, in ullamcorper magna magna et
            urna. Duis congue feugiat vehicula. Sed sit amet maximus purus.
            Donec eget arcu tempor, rhoncus enim ac, lacinia felis. Nam libero
            enim, efficitur id enim id, gravida dapibus tellus. Duis efficitur
            tincidunt vestibulum. Curabitur dolor orci, consectetur vitae neque
            a, scelerisque maximus sapien. Fusce tincidunt eleifend tortor, sit
            amet vehicula tortor faucibus non. Vestibulum sit amet dui quis
            felis bibendum posuere.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Item;
