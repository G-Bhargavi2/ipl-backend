import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import teamsRoute from './routes/teams.js'
import teamMatchesRoute from './routes/team_matches.js'
import recentMatchesRoute from './routes/recent_matches.js'
dotenv.config()
const PORT = 8080;

const app = express()
app.use(cors());
app.use(express.json());


const connect = async () =>{
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("MongoDB connected Successfully")
    }
    catch(error){
        
        throw error;
    }
}

mongoose.connection.on("disconnected", () =>{
    console.log("mongoDB disconnected!")
})
 
// middlewares 

app.use("/ipl" ,teamsRoute)
app.use("/ipl/team-matches" , teamMatchesRoute)
app.use("/ipl/team-matches",recentMatchesRoute)

app.listen(PORT, () =>{
    connect();
    console.log("Connected to backend!")
}) 