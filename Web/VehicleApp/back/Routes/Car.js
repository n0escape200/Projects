import { Router } from "express";
import { createCar, getByIdCar, getCars } from "../Controller/Car.js";

const router = Router();

router.post("/create", createCar);

router.get("/getAll", getCars);

router.get("/getId/:id", getByIdCar);

export default router;
