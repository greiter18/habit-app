import express from "express";
import mongoose from 'mongoose';
import { MONGO_URI } from "./config/keys.js";
import bodyParser from "body-parser";

import { habits } from "./routes/habits.js";
import {users} from "./routes/users.js";
const app = express();

mongoose
  .connect(MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.json());

app.get("/", (req,res) => res.send("Habit App"));

app.use("/api/habits", habits)
app.use("/api/users", users)

const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Server is running on port ${port}`));