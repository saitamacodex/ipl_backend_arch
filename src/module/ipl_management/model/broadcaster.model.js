import mongoose from "mongoose";

const broadcastersSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      requried: [true, "Broadcaster name is required"],
      trim: true,
      minlength: 2,
      maxlength: 100,
    },
  },
  { timestamps: true },
);

export default mongoose.model("Broadcaster", broadcastersSchema);
