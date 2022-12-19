import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const HabitSchema = Schema(
  {
    user_id:{ type: Number, required: true},
    title:{type: String, required: true},
    description:{type: Text, required: false},
    type:{type: String, required: true},
    dates:{type: Array, required: true},
    reminder:{type: Number, required: false},
    reminder_time:{type: Number, required: false}
    
  }, 
  {
    timestamps: true
  }
)


export const Habit = mongoose.model("Habit", HabitSchema);