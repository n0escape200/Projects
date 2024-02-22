import Car from "../Models/Car.js";
import User from "../Models/User.js";
import multer from "multer";

export const createCar = async (req, res) => {
  try {
    const newCar = new Car(req.body);
    const savedCar = await newCar.save();
    const currentUser = await User.findById(req.params.id);
    if (currentUser) {
      currentUser.data.push(savedCar.id);
      await currentUser.save();
      console.log(req.body);
    } else {
      req.status(404).json("User error");
    }
    res.status(200).json(savedCar);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const getCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.status(200).json(cars);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const findByIdCar = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    if (car) {
      res.status(200).json(car);
    } else {
      res.status(404).json("Car was not found");
    }
  } catch (error) {
    res.status(400).json(error);
  }
};
