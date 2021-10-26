const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router');
const app = express();
const mongoose = require('mongoose');

 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use('/api', router);

mongoose.connect('mongodb://localhost:27017/test');
const db = mongoose.connection;
db.on('open', () => {
   console.log('Connected to the MongoDB database.');
   app.listen(3000, () => console.log('Listening to port 3000'));
});
db.on('error', (err) => {
   console.log(`Database error: ${err}`);
});

