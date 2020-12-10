//export MONGO_URL_USE_TEST='mongodb://localhost:27017/app04_test'
const mongodbURI = process.env.MONGO_URL_USE_TEST || process.env.MONGO_URL


const mongoose = require('mongoose')
beforeAll((done) => {
    process.env.NODE_ENV = 'test'
    mongoose.set('bufferCommands', false)
    mongoose.connect(mongodbURI,
        { useNewUrlParser: true, useUnifiedTopology: true })
        .then(x =>{
            console.log('connected to mongoose: ' + mongodbURI);
            done();
        })
        .catch(error => console.log('error creating connection to: ' + mongodbURI + error))

    mongoose.connection.on('error', err => {
        console.log(err)
    })
})

afterAll(async () => {
    await mongoose.connection.close()
})
