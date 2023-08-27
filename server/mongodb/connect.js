// import mongoose from 'mongoose';
const mongoose = require('mongoose');


const connectDb = (url) => {
    mongoose.set("strictQuery", true);

    mongoose.connect(url)
    .then(() => console.log("Database Connected"))
    .catch((err) => console.log(err));
}
module.exports = connectDb;

