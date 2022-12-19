import express from "express";


const router = express.Router();


router.get("/" , (_,res) => {
  const habits = [
        { _id: 1, 
          user_id: 1, 
          title: "Start going to the gym more",
          description: "",
          category: "exercise",
          reminder: true,
          reminder_time: 250,
          dates: [
            {'12-11-22': {difficulty: 7, comments: "Today was not too bad"} },
            {'12-13-22': {difficulty: 4, comments: "Felt Great"} }
          ]
         },
          { _id: 2, 
          user_id: 1, 
          title: "Write in journal",
          description: "",
          category: "mental health",
          reminder: true,
          reminder_time: 100,
          dates: [
            {'10-14-22': {difficulty: 3, comments: "wrote alot today"} },
            {'12-13-22': {difficulty: 4, comments: "Felt Great"} }
          ]
         },
           { _id: 3, 
          user_id: 2, 
          title: "Read more books",
          description: "",
          category: "education",
          reminder: false,
          reminder_time: '',
          dates: [
            {'12-01-22': {difficulty: 4, comments: "Read 30 pages today"} },
            {'12-16-22': {difficulty: 9, comments: "Barely made it"} }
          ]
         },
    ];
    res.json(habits);
})

export const habits = router;