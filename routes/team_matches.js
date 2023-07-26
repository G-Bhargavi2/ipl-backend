import express from 'express'
import TeamMatches from '../models/TeamMatches.js';
import Team from '../models/Team.js'

const router = express.Router();

router.post("/:teamid" ,async (req,res)=>{
    const teamId = req.params.teamid
    const newTeamMatch = new TeamMatches(req.body)

    try{
        const savedTeam = await newTeamMatch.save()
        try{
            await Team.findByIdAndUpdate(teamId,
                { latest_match_id:savedTeam._id }
                )
            
            res.status(200).json(savedTeam);
        }catch(error)
        {
            res.status(500).json(error)
            console.log(error)
            throw error;
        }

    }
    catch(error){
        res.status(500).json(error)
        console.log(error)
        throw error;
    }
    
})

router.get("/:id",async (req,res)=>{
        try{
            const teamMatches = await TeamMatches.findById(req.params.id);
            res.status(200).json(teamMatches);
        }catch(error){
            console.log(error);
            res.status(500).json({ message: 'Internal server error' });
            
        }
})



router.get("/", async (req,res)=>{
    try{
        const teamMatches = await TeamMatches.find();
        res.status(200).json(teamMatches);
    }catch(error){
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
        
    }

})

export default router