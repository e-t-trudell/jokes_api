const mongoose = require('mongoose');
const express = require("express");
const Joke = require('./models/joke.model');
const app = express();
const port = 8000

app.use(express.json(), express.urlencoded({ extended: true }));
// config
require("./config/mongoose.config");

const routes = require("./routes/joke.routes");
routes(app);
    
app.listen(8000, () => {
    console.log("The server is all fired up on port 8000")
});