import Car from "../Models/Car.js";

export const createCar = async (req, res) => {
  try {
    const newCar = new Car(req.body);
    const savedCar = await newCar.save();
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

export const getByIdCar = async (req, res) => {
  try {
    const car = await Car.findByID(req.params.id);
    res.status(200).json(car);
  } catch (error) {
    res.status(400).json(error);
  }
};
