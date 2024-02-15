import { Router } from "express";
import { createCar, findByIdCar, getCars } from "../Controller/Car.js";

const router = Router();

router.post("/create/:id", createCar);

router.get("/getAll", getCars);

router.get("/findById/:id", findByIdCar);

export default router;
