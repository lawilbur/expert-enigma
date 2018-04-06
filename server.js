const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({extended:false}))

const pepperController = require('./controllers/peppers.js');
app.use('/peppers' , pepperController);


const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/peppers';
mongoose.connect(mongoURI);
mongoose.connection.once('open' , ()=>{
    console.log('connected to peppers');
});

const port = process.env.PORT || 3000;
app.listen(3001 , ()=>{
    console.log('Listening');
})
