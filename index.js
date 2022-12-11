import express from "express";
import { habits } from "./routes/habits.js";


const app = express();

app.use(express.json());

app.get("/", (req,res) => res.send("Habit App"));

app.use("/api/habits", habits)

const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Server is running on port ${port}`));