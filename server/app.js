require('dotenv').config();
const express = require('express');
const app = express();
const web = require('./routes/web');
const connectDb = require('./db/connectDb');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const cookieParser = require("cookie-parser");

// {
//   origin: "http://192.168.216.115:5173"
// }
app.use(cors()); // FOR API COMMUNICATION IN REACT

app.use(cookieParser());

app.use(fileUpload({ useTempFiles: true }));

app.use(express.json()); // GET DATA IN API

connectDb();

app.use('/api', web);

// CREATE SERVER
app.listen(process.env.PORT, () => {
  console.log(`Server Running on http://localhost:${process.env.PORT}/api/getalluser`);
});
