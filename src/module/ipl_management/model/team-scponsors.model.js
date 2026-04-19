import mongoose from "mongoose";

const teamSponsorSchema = new mongoose.Schema(
  {
    team_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
      required: [true, "Team is required"],
    },
    sponsor_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Sponsor",
      required: [true, "Sponsor is required"],
    },
  },
  { timestamps: true },
);

teamSponsorSchema.index({ team_id, sponsor_id }, { unique: true });

export default mongoose.model("TeamSponsor", teamSponsorSchema);
