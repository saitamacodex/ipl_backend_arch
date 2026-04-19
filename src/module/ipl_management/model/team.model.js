import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const teamSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      requried: [true, "Team name is required"],
      trim: true,
      minlength: 2,
      maxlength: 100,
    },
    owner_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Owner",
    },
  },
  { timestamps: true },
);

export default mongoose.model("Team", teamSchema);
