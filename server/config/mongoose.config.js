const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Jokes', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the jokes database'))
    .catch(err => console.log('Something went wrong when connecting to the jokes database ', err));