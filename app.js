const express = require('express');
const mongoose = require('mongoose');


const app = express();

const userRouter = require('./routes/User');
const usersCollectionRouter = require('./routes/Users');
const fibRouter = require('./routes/mathoperations/fibonacci');
const solvRouter = require('./routes/mathoperations/solver');


// get user/:id , put user/ delete user/:id  post user/:id operations
app.use('/user', userRouter);



// get users/ opereation
app.use('/users', usersCollectionRouter);

//  get fibonacci?upperLimit  operation
app.use('/fibonacci', fibRouter);


// post solver/ operation
app.use('/solver', solvRouter);




//welcome
app.get('/' , (req,res)=>{
  res.send('Welcome, the api contains these  endpoints /fibonacci , /solver , /user, /users');

});


app.use(express.json());

//mongoose connector
mongoose.connect('mongodb+srv://user:user@cluster0.rpahy.mongodb.net/db?retryWrites=true&w=majority');




module.exports = app
