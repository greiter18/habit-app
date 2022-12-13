import express from "express";

const router = express.Router();

router.get("/", (_,res) => {
  const users = [
        { _id: 1, 
          first_name: "Vladimir ",
          last_name: "Harkonnen", 
          email: 'vlad@gmail.com',
          password: "12345"
        },
        {
            _id: 2,
            first_name: "Lady ",
            last_name: "Jessica", 
            email: 'lady@gmail.com',
            password: "12345",
        },
        {
            _id: 3,
            first_name: "Paul ",
            last_name:"Atreides",
            email: 'paul@gmail.com', 
            password: "12345",
        },
    ];
  res.json(users);
})

export const users = router;