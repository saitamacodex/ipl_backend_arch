import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const ownerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      requried: [true, "Owner name is required"],
      trim: true,
      minlength: 2,
      maxlength: 100,
    },
    company: {
      type: String,
      requried: [true, "Company name is required"],
      trim: true,
      minlength: 2,
      maxlength: 100,
    },
  },
  { timestamps: true },
);

export default mongoose.model("Owner", ownerSchema);
