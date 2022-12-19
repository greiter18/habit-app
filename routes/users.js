import express from "express";

const router = express.Router();
import bcrypt from 'bcryptjs';
import {User}  from '../models/users.js'

router.get("/", (_,res) => {
//   const users = [
//         { _id: 1, 
//           first_name: "Vladimir ",
//           last_name: "Harkonnen", 
//           email: 'vlad@gmail.com',
//           password: "12345"
//         },
//         {
//             _id: 2,
//             first_name: "Lady ",
//             last_name: "Jessica", 
//             email: 'lady@gmail.com',
//             password: "12345",
//         },
//         {
//             _id: 3,
//             first_name: "Paul ",
//             last_name:"Atreides",
//             email: 'paul@gmail.com', 
//             password: "12345",
//         },
//     ];
//   res.json(users);
  res.json({msg:'user index page'});
})

router.post('/register', (req,res) => {
  User.findOne({email: req.body.email})
  .then(user => {
    if(user){
      return res.status(400).json({email: "A user had already registered with this email"})
    } else {
      debugger
        const newUser = new User({
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          email: req.body.email,
          password: req.body.password
        })
        // bcrypt.genSalt(10, (err, salt) => {
        //   bcrypt.hash(newUser.password, salt, (err, hash) => {
        //     if (err) throw err;
        //     debugger
        //     newUser.password = hash;
            newUser.save()
              .then(user => res.json(user))
              .catch(err => console.log('ERROR-----------',err));
          // })
      //})
      }
  })
})

export const users = router;