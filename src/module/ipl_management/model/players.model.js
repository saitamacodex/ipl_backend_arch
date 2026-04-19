import mongoose from "mongoose";

const playerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      requried: [true, "Player Name is required"],
      trim: true,
      minlength: 2,
      maxlength: 100,
    },
    role: {
      type: String,
      requried: [true, "Role is required"],
      enum: {
        value: ["batsman", "bolwer", "all-rounder", "wicket-keeper"],
        message:
          'Role must be: "batsman", "bolwer", "all-rounder", "wicket-keeper"',
      },
    },
    team_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
      required: [true, "Team is required"],
    },
  },
  { timestamps: true },
);

export default mongoose.model("Player", playerSchema);
