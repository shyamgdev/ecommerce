require('dotenv').config();
const mongoose = require('mongoose');
const url = process.env.URL;
const liveUrl = process.env.LIVEURL;

const connectDb = () => {
  return mongoose.connect(url)
    .then(() => {
      console.log("Mongodb Connected Successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDb;