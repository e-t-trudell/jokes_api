const mongoose = require('mongoose');
const DB = 'JokeDatabase'

mongoose.connect(`mongodb://localhost/${DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the jokes database'))
    .catch(err => console.log('Something went wrong when connecting to the jokes database ', err));