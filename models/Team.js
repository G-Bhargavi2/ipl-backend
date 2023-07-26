import mongoose from "mongoose";


const TeamSchema = new mongoose.Schema(
      {
     name:{
        type: String,
        required:true
     },
     id:{
        type:String,
        required:true,
     },
     team_logo:{
        type:String,
        required:true
     }  ,
     latest_match_id :{
      type:String
     }
})
export default mongoose.model("Team", TeamSchema)