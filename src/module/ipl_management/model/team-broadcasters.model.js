import mongoose from "mongoose";

const teamBroadcasterSchema = new mongoose.Schema(
  {
    team_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
      required: [true, "Team is required"],
    },
    broadcast_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Broadcaster",
      required: [true, "Broadcaster is required"],
    },
  },
  { timestamps: true },
);

teamBroadcasterSchema.index({ team_id, broadcast_id }, { unique: true });

export default mongoose.model("TeamBroadcaster", teamBroadcasterSchema);
