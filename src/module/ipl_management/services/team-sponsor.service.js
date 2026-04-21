import Team from "../model/team.model.js";
import Sponsor from "../model/sponsors.model.js";
import TeamSponsor from "../model/team-scponsors.model.js";

// we need to attach team sponsornship to the team
// same as broadcast
const attachSponsor = async ({ teamId, sponsorId }) => {
  const team = await Team.findById(teamId);
  if (!team) {
    throw new Error("Team not found");
  }
  const sponsor = await Team.findById(sponsorId);
  if (!sponsor) {
    throw new Error("Sponsor not found");
  }

  const existing = await TeamSponsor.findOne({ teamId, sponsorId });
  if (existing) {
    throw new Error("Sponsor already attached to this team");
  }

  const teamSponsor = await TeamSponsor.create({ teamId, sponsorId });

  return teamSponsor;
};
