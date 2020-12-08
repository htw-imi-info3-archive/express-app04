'use strict'

const Todo = require('../models/todos')

exports.index = (req, res, next) => {
        Todo.find()
            .sort({ 'name': 'asc' })
            .then(todos => {
                res.render('todos/index', {todos: todos})
            })
            .catch(error => {
                console.log(`Error fetching todos: ${error.message}`)
                next(error)
            })
}

exports.show = (req, res, next) => {
    const todoId = req.params.id
    Todo.findById(todoId)
        .then( todo =>{
            res.render('todos/show', {todo: todo})
        })
        .catch(error => {
            console.log(`Error fetching todo by ID: ${error.message}`)
            next(error)
        })

}


exports.create = (req, res, next) => {
    const todoParams = getParams(req.body)
    const newTodo = new Todo(todoParams)
    newTodo.save()
        .then(result => {
            res.render('todos/show', {todo: result})
        })
        .catch(error => {
            if (error) res.send(error)
        })
}

exports.update = (req, res, next) => {
    const todoId = req.params.id
    const todoParams = getParams(req.body)

    Todo.findOneAndUpdate({ _id: todoId }, todoParams,{new: true})
        .then(result => {
            res.render('todos/show', {todo: result})
        })
        .catch(error => {
            if (error) res.send(error)
        })
}

exports.delete = (req, res, next) => {
    const todoId = req.params.id
    Todo.findByIdAndRemove(todoId)
        .then(() => {
            next();
        })
        .catch(error => {
            if (error) res.send(error)
        })
}

function getParams(body) {
    return {
        title: body['todo-title'],
        done: body['todo-done']
    }
}

exports.apiDone = (req, res, next) => {
    const todoId = req.params.id
    Todo.findOneAndUpdate({ _id: todoId }, {done: true},{new: true})
        .then(result => {
            res.send(result)
        })
        .catch(error => {
            if (error) res.send(error)
        })
}

exports.apiReset = (req, res, next) => {
    const todoId = req.params.id
    Todo.findOneAndUpdate({ _id: todoId }, {done: false},{new: true})
        .then(result => {
            res.send(result)
        })
        .catch(error => {
            if (error) res.send(error)
        })
}

