import mongoose from "mongoose";

const RecentMatchSchema = new mongoose.Schema({
      umpires: String,
      result: String,
      man_of_the_match: String,
      id: String,
      date: String,
      venue: String,
      competing_team: String,
      competing_team_logo: String,
      first_innings: String,
      second_innings: String,
      match_status: String,
});
export default mongoose.model("RecentMatch", RecentMatchSchema)


