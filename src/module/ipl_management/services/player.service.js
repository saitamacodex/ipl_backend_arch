import Team from "../model/team.model.js";
import Player from "../model/players.model.js";
// todo CURD

const transferPlayer = async (playerId, newTeamId) => {
  const find_team = await Team.findById(newTeamId);
  if (!find_team) {
    throw new Error("Team not found");
  }

  const player = await Player.findByIdAndUpdate(
    playerId,
    { team_id: newTeamId },
    { new: true, runValidators: true },
  ).populate("team_id", "name");

  if (!player) {
    throw new Error("Player not found");
  }
};

const updatePlayerRole = async (playerId, role) => {
  const player = await Player.findByIdAndUpdate(
    playerId,
    { role },
    { new: true, runValidators: true },
  ).populate("team_id", "name");

  if (!player) {
    throw new Error("Player not found");
  }
};

export { transferPlayer, updatePlayerRole };
