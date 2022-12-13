import express from "express";
import mongoose from 'mongoose';
import { MONGO_URI } from "./config/keys.js";

import { habits } from "./routes/habits.js";
import {users} from "./routes/users.js";

mongoose
  .connect(MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const app = express();
app.use(express.json());

app.get("/", (req,res) => res.send("Habit App"));

app.use("/api/habits", habits)
app.use("/api/users", users)

const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Server is running on port ${port}`));