const JokeController = require('../controllers/jokes.controller');
// const { create } = require('../models/joke.model');
// START HERE fixcing routes to consolidate to variables
const routes = (app)=>{
// create
    app.post('/api/jokes', JokeController.create);
// Read
    app.get('/api/jokes', JokeController.getAll);
    app.get('/api/jokes/:id', JokeController.getOne);
// Update
    app.put('/api/jokes/:id', JokeController.edit);
// delete
    app.delete('/api/jokes/:id', JokeController.destroy);
}

module.exports = routes
//     
//     
//     
//     
//    
// }