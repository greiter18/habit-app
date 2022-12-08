const express = require('express');

const app = express();

app.get("/", (req,res) => res.send("Let's get this bread 🥖"))

const port = process.env.PORT || 5001;

app.listen(port, () => console.log(`Server is running on port ${port}`));