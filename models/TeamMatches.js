import mongoose from "mongoose";


const LatestMatchDetailsSchema = new mongoose.Schema({
  umpires: String,
  result: String,
  man_of_the_match: String,
  id: String,
  date: Date,
  venue: String,
  competing_team: String,
  competing_team_logo: String,
  first_innings: String,
  second_innings: String,
  match_status: String,
  team_id:String,
});


const TeamMatchesSchema = new mongoose.Schema({
  team_banner_url: String,
  latest_match_details: LatestMatchDetailsSchema,
  recent_matches: [Object],
});

const TeamMatches = mongoose.model('TeamMatches', TeamMatchesSchema);

export default TeamMatches
