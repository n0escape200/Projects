import { Router } from "express";
import {
  createCar,
  deleteCar,
  findByIdCar,
  getCars,
} from "../Controller/Car.js";
import multer from "multer";

const router = Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../../../Web/VehicleApp/front/photos");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + file.originalname;
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

router.post("/create/:id", upload.any("photos"), createCar);

router.get("/getAll", getCars);

router.get("/findById/:id", findByIdCar);

router.post("/delete/:id", deleteCar);

export default router;
