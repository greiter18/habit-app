import express from "express";

const router = express.Router();

router.get("/" , (_,res) => {
  const habits = [
        { _id: 1, name: "Vladimir Harkonnen", content: "Am I the drama?" },
        {
            _id: 2,
            name: "Lady Jessica",
            content: "Is Paul the Kwisatz Haderach?",
        },
        {
            _id: 3,
            name: "Paul Atreides",
            content: "Why are my dreams so sandy?",
        },
    ];
    res.json(habits);
})

export const habits = router;