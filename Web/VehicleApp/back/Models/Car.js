import mongoose from "mongoose";

const carModel = mongoose.Schema(
  {
    brand: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    KM: {
      type: Number,
      required: true,
    },
    CC: {
      type: Number,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    fuel: {
      type: String,
      required: true,
    },
    photos: [String],
  },
  { timestamps: true }
);

export default mongoose.model("Car", carModel);
