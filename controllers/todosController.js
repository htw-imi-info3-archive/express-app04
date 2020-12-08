'use strict'

const todos = require('../models/todos')

exports.index = (req, res, next) => {
    res.render('todos/index', {todos: todos})
}

exports.show = (req, res, next) => {
    const todoId = req.params.id
    res.render('todos/show', {todo: todos[todoId]})
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