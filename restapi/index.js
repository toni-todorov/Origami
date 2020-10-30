const config = require('./config/config');
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/origami' , {
     useNewUrlParser: true,
     useUnifiedTopology: true,
     useFindAndModify: false
} , (err) => {
    if (err){
        console.error(err)
        throw err
    }
    console.log('Database is setup and runnig')
})

const app = require('express')();



const configExpress = require('./config/express');
const cubeRoutes = require('./config/routes');
configExpress(app);
cubeRoutes(app);


    app.listen(config.port, console.log(`Listening on port ${config.port}!`))

