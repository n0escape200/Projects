import { useEffect, useRef, useState } from "react";
import React from "react";
import Navbar from "../../SubComponents/Components/Navbar.jsx";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "../CSS/Add.css";

const Add = () => {
  //Used for making custom file input
  const addPhotoRef = useRef();

  //Array that hold the added photos in the gallery
  const [photoArray, setPhotoArray] = useState([]);

  //Shows witch type on vehicle to add
  const [active, setActive] = useState("Cars");

  //The data from the API call
  const [data, setData] = useState(undefined);

  //Field for paylod
  const [currentBrand, setCurrentBrand] = useState({
    brand: undefined,
    index: undefined,
  });

  const [currentModel, setCurrentModel] = useState(undefined);

  useEffect(() => {
    if (currentBrand.brand) {
      console.log(currentBrand.brand);
    }
  }, [currentBrand]);

  useEffect(() => {
    if (currentModel) {
      console.log(currentModel);
    }
  }, [currentModel]);

  //For deleting photos and also display the delte button over
  //the hovered image
  const [deletePhoto, setDeletePhoto] = useState(undefined);

  const handleButtonClick = () => {
    addPhotoRef.current.click();
  };

  const handleAddPhoto = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setPhotoArray([...photoArray, url]);
  };

  //The API call witch gets the JSON from the database
  const getData = async () => {
    await axios
      .get("http://localhost:3000/api/data/getData")
      .then((res) => {
        setData(res.data[0].data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //Getting the data from the API call
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    //Setting the first brand and it's models from 'data"
    if (data) {
      setCurrentBrand({ brand: data[0].brand, index: 0 });
      setCurrentModel(data[0].models[0]);
    }
  }, [data]);

  const handleBrand = (event) => {
    setCurrentBrand((prevData) => ({ ...prevData, brand: event.target.value }));
    if (data) {
      data.map((item, i) => {
        if (item.brand == event.target.value) {
          setCurrentBrand(
            (prevData) =>
              //'index' is for pulling the models from the specific index inside 'data"
              setCurrentBrand({ ...prevData, index: i }),
            setCurrentModel(data[i].models[0])
          );
          return;
        }
      });
    }
  };

  return (
    <div className="addMain">
      <Navbar />
      <div className="addContent">
        <div className="top">
          <span
            className={active == "Cars" ? "active fltBtn" : "fltBtn"}
            onClick={() => setActive("Cars")}
          >
            Cars
          </span>
          <span
            className={active == "Motorcycles" ? "active fltBtn" : "fltBtn"}
            onClick={() => setActive("Motorcycles")}
          >
            Motorcycles
          </span>
          <span
            className={active == "Trucks" ? "active fltBtn" : "fltBtn"}
            onClick={() => setActive("Trucks")}
          >
            Trucks
          </span>
          <span
            className={active == "Parts" ? "active fltBtn" : "fltBtn"}
            onClick={() => setActive("Parts")}
          >
            Parts
          </span>
        </div>
        <div className="middle">
          <div className="label">
            <span>Select Brand</span>
            <select onChange={handleBrand} id="Brand">
              {data &&
                data.map((item, index) => (
                  <option key={index} value={item.brand}>
                    {item.brand}
                  </option>
                ))}
            </select>
          </div>
          <div className="label">
            <span>Select Model</span>
            <select
              onChange={(event) => {
                setCurrentModel(event.target.value);
              }}
              id="Model"
              value={currentModel}
            >
              {data &&
                currentBrand &&
                data[currentBrand.index] &&
                data[currentBrand.index].models.map((item, index) => (
                  <option key={index}>{item}</option>
                ))}
            </select>
          </div>
          <div className="label">
            <span>Select KM</span>
            <input type="number" name="" id="" />
          </div>
          <div className="label">
            <span>Select CC</span>
            <input type="number" name="" id="" />
          </div>
          <div className="label">
            <span>Select Year</span>
            <select id="Year">
              <option value="2024">2024</option>
            </select>
          </div>
          <div className="label">
            <span>Select Fuel</span>
            <select id="Fuel">
              <option value="Diesel">Diesel</option>
            </select>
          </div>
          <div className="label">
            <span>Price:</span>
            <div className="currency">
              <input type="number" name="" id="" />
              <select name="currency" id="">
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
              </select>
            </div>
          </div>
          <div>
            <span>Add photos:</span>
            <input
              ref={addPhotoRef}
              onChange={handleAddPhoto}
              style={{ display: "none" }}
              type="file"
              name=""
              id=""
            />
            <div className="photoInput">
              {photoArray.length == 0 ? (
                <>
                  <div onClick={handleButtonClick} className="addPhotoBtn">
                    +
                  </div>
                </>
              ) : (
                <div className="imgGallery">
                  {photoArray.map((item, index) => {
                    return (
                      <div
                        onMouseEnter={() => {
                          setDeletePhoto(index);
                        }}
                        onMouseLeave={() => {
                          setDeletePhoto(undefined);
                        }}
                        className="imgContainer"
                        key={index}
                      >
                        <img
                          className="imgGalleryAdd"
                          src={item}
                          value={index}
                          alt=""
                        />
                        {deletePhoto == index && (
                          <div
                            onClick={() => {
                              let aux = [];
                              for (let i = 0; i < photoArray.length; i++) {
                                if (i != deletePhoto) {
                                  aux.push(photoArray[i]);
                                }
                              }
                              setPhotoArray(aux);
                            }}
                            className="imgDel"
                          >
                            <FontAwesomeIcon
                              className="trashIcon"
                              icon={faTrash}
                              size="2xl"
                            />
                          </div>
                        )}
                      </div>
                    );
                  })}
                  <div className="galleryBtn" onClick={handleButtonClick}>
                    +
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="label description">
            <span>Description:</span>
            <textarea name="description" id="description"></textarea>
          </div>
        </div>
        <div className="submit">Submit</div>
      </div>
    </div>
  );
};

export default Add;
