const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String
        // required:[true,"Setup required"],
        // value entered for set up must match one of the below
        // enum:{
        //     values:[
        //         'This joke',
        //         'That joke',
        //         'Funny Thing'
        //     ],
        //     message: '{VALUE} is not supported'
        // },
        // minlength:[6,"First name must be at least 6 characters"]
    },
    punchline: {
        type: String
        // required:[true,"Punchline required"],
        // maxlength:[30,"Last name must be less than 30 characters"]
    }
},{timestamps:true});

const Joke = mongoose.model('Joke', JokeSchema);
module.exports = Joke;