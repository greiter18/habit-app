import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const HabitSchema = Schema(
  {
    user_id:{ type: Number, required: true},
    title:{type: String, required: true},
    description:{type: String, required: true},
    type:{type: String, required: true},
    dates:{type: Array, required: true},
    reminder:{type: Number, required: true},
    
  }, 
  {
    timestamps: true
  }
)


export const Habit = mongoose.model("Habit", HabitSchema);