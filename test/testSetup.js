module.exports = {
    app: require("../app"),
    request: require("supertest"),
    ...require("../models/todos")
}

const mongoose = require('mongoose')
beforeAll((done) => {
    process.env.NODE_ENV = 'test'
    mongoose.set('bufferCommands', false)
    mongoose.connect(process.env.MONGO_URL,
        {useNewUrlParser: true, useUnifiedTopology: true})
        .then(x => {
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


