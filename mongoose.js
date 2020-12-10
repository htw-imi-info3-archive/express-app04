const mongoose = require('mongoose');

const mongodbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/app04'
console.log("mongoose: connecting to "+mongodbURI)

mongoose.connect(mongodbURI, { useNewUrlParser: true, useUnifiedTopology: true })
