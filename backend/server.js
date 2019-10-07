const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config()

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://sodiicc:trader32@cluster0-rsnt4.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoB+DB connection is successfully !!!')
})

const exercisesRouter = require('./routs/exerxisesRouter');
const usersRouter = require('./routs/usersRouter');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
  console.log(`Server is running on PORT: ${port}`)
})