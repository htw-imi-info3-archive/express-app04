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
    const newTodo = getParams(req.body)
    res.send({todo: newTodo, body: req.body})
}

function getParams(body) {
    const o = {}
    if (body['title']) {
        o['title'] = body['title']
    }
    return o;
}