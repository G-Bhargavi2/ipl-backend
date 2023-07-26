import express from 'express'
import Team from '../models/Team.js';

const router = express.Router();

//create 

router.post("/",async (req,res)=>{

    const newTeam = new Team(req.body)
    try{

        const savedTeam = await newTeam.save()
        res.status(200).json(savedTeam);
    }catch(error)
    {
        res.status(500).json(error)
    }

})

//get
router.get("/teams", async (req,res)=>{
    try{
        const teams = await Team.find();
        res.status(200).json(teams);
    }catch(error){
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
        // res.status(500).json(error);
    }
})

export default router 