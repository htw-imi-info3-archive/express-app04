const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/app03'
const mongoose = require('mongoose')
const Todo = require('../../models/todos')
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })

const todoData = require('./todo-data.js')

console.log('todoData ' + todoData.length)
Todo.deleteMany({})
  .then(() => {
    console.log('all todos deleted')
    return Todo.create(todoData)
  })
  .then(createdTodos => {
    console.log(createdTodos.length + ' todos created')
    mongoose.connection.close()
  })
  .catch(error => {
    console.log(error.message)
    mongoose.connection.close()
  })
