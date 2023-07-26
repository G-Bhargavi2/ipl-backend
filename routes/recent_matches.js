import express from "express";

import TeamMatches from "../models/TeamMatches.js";
import RecentMatches from "../models/RecentMatches.js";

const router = express.Router();

router.post("/recent/:teammatchid" , async (req,res)=>{
    const teamMatchId = req.params.teammatchid
    const newRecentMatch = new RecentMatches(req.body)

    try{
        const savedRecentMatch = await newRecentMatch.save()
        try{
            await TeamMatches.findByIdAndUpdate(teamMatchId,
                { $push : {recent_matches : savedRecentMatch}},
                {new:true})
            
            res.status(200).json(savedRecentMatch);
        }catch(error)
        {
            res.status(500).json(error)
            console.log(error)
            throw error;
        }
    }catch(error){
        res.status(500).json(error)
        console.log(error);
        throw error;
        }

})

export default router