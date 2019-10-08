const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require("path")

require('dotenv').config()

const app = express();
const port = process.env.PORT || 9000;

app.use(express.static(path.join(__dirname, "client", "build")))
app.use(cors());
app.use(express.json());

// if(process.env.NODE_ENV ==='production'){
//   app.use(express.static("backend/build"))
// }

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoB+DB connection is successfully !!!')
})

const exercisesRouter = require('./routs/exerxisesRouter');
const usersRouter = require('./routs/usersRouter');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on PORT: ${port}`)
})