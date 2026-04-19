import mongoose from "mongoose";

const sponsorsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      requried: [true, "Sponsors name is required"],
      trim: true,
      minlength: 2,
      maxlength: 100,
    },
  },
  { timestamps: true },
);

export default mongoose.model("Sponsor", sponsorsSchema);
