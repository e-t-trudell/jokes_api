const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required:[true,"Setup required"],
        minlength:[6,"First name must be at least 6 characters"]
    },
    punchline: {
        type: String,
        required:[true,"Punchline required"],
        maxlength:[30,"Last name must be less than 30 characters"]
    }
},{timestamps:true});

const Joke = mongoose.model('Joke', JokeSchema);
module.exports = Joke;