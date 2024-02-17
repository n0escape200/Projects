import React from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/Listing.css";

const Listing = ({
  id,
  type,
  brand,
  model,
  km,
  cc,
  year,
  fuel,
  price,
  currency,
  photos = [],
}) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/item/${id}`);
      }}
      className="listingMain"
    >
      <div className="listingContent">
        {type == "portrait" ? (
          <div className="portrait">
            <img src={photos[0]} />
            <span>{brand}</span>
            <span>{model}</span>
            <span>{year}</span>
            <span>
              {price}
              {currency}
            </span>
          </div>
        ) : (
          <div className="landscape">
            <img src={photos[0]} alt="Car" />
            <div className="right">
              <span>{brand}</span>
              <span>{model}</span>
              <span>{year}</span>
              <span>{cc}</span>
              <span>{km}</span>
              <span>{fuel}</span>
              <span>
                {price}
                {currency}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Listing;