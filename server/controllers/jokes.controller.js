// STEP FOUR
const Joke = require('../models/joke.model');

const JokeController={
    // create
    create: (req, res) => {
        Joke.create(req.body)
        .then((joke) => {
            res.status(200).json(joke)
            console.log(joke)
        })
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong creating', error: err })
        })
    },
    // read
    getAll: (req,res) => {
        Joke.find({})
        .then((jokes) => {
            res.json(  jokes  )
        })
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong creating', error: err })
        })
    },
    getOne: (req, res) => {
        Joke.findOne({_id:req.params.id})
        .then((joke) => {
            res.json(  joke  )
        })
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong creating', error: err })
        })
    },
    // update
    edit: (req, res) => {
        // when finding joke seeking id from the request params, then giving back the new joke option shows true
        Joke.findOneAndUpdate({_id:req.params.id},req.body,{new:true,runValidators:true})
        .then((joke) => {
            res.json(joke)
        })
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong creating', error: err })
        })
    },
    // delete
    destroy: (req, res) => {
        Joke.findOneAndDelete({_id:req.params.id})
        .then((joke) => {
            res.json(joke)
        })
        .catch((err) => {
            res.status(404).json({ message: 'Something went wrong creating', error: err })
        })
    }
}
module.exports = JokeController
// module.exports.findAllJokes = (req, res) => {
//     Joke.find()
//         .then((allDaJokes) => {
//             res.json({ msg:'all' })
//         })
//         .catch((err) => {
//             res.json({ message: 'Something went wrong finding all', error: err })
//         });
// }
 
// module.exports.findOneSingleJoke = (req, res) => {
//     Joke.findOne({ _id: req.params.id })
//         .then(oneSingleJoke => {
//             res.json({  msg:'one'  })
//         })
//         .catch((err) => {
//             res.json({ message: 'Something went wrong finding one', error: err })
//         });}
 
// module.exports.createNewJoke = (req, res) => {
//     Joke.create(req.body)
//         .then(newlyCreatedJoke => {
//             res.json({  msg:'created'  })
//         })
//         .catch((err) => {
//             res.json({ message: 'Something went wrong creating', error: err })
//         });}
 
// module.exports.updateExistingJoke = (req, res) => {
//     Joke.findOneAndUpdate(
//         { _id: req.params.id },
//         req.body,
//         { new: true, runValidators: true }
//     )
//         .then(updatedJoke => {
//             res.json({  msg:'updated'  })
//         })
//         .catch((err) => {
//             res.json({ message: 'Something went wrong deleting', error: err })
//         });}
 
// module.exports.deleteAnExistingJoke = (req, res) => {
//     Joke.deleteOne({ _id: req.params.id })
//         .then(result => {
//             res.json({  msg:'delete'  })
//         })
//         .catch((err) => {
//             res.json({ message: 'Something went wrong deleting one', error: err })
//         });}


// A couple key points:

// Joke is a constructor function which can create new Joke objects and also has other methods that will talk to the database!
// the .then() will only execute upon successfully inserting data in the database
// the .catch() will execute only if there is an error.