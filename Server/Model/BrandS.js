import mongoose from "mongoose";

const BrandS = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("Brand", BrandS);
