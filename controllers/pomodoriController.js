'use strict'

const {Todo, Pomodoro} = require('../models/todos')

exports.start = (req, res, next) => {
    const todoId = req.params.id
    const params = {start: new Date(), status: 'running'};
    Todo.findById(todoId)
        .then(todo => {
            todo.current = new Pomodoro(params)
           // todo.pomodori.push(params)
            return todo.save()
        })
        .then(todo => {
            res.send(todo)
        })
        .catch(error => {
           next(error)
        })
}

exports.finish = (req, res, next) => {
    const todoId = req.params.id
    const params = {start: new Date, status: 'running'};
    Todo.findById(todoId)
        .then(todo => {
            const p = todo.current
            p.end = new Date()
            p.status = 'finished'
            todo.pomodori.push(p)
            todo.current = null
            return todo.save()
        })
        .then(todo => {
            res.send(todo)
        })
        .catch(error => {
           next(error)
        })
}

exports.reset = (req, res, next) => {
    const todoId = req.params.id
    const params = {start: new Date, status: 'running'};
    Todo.findById(todoId)
        .then(todo => {
            todo.current = null
            return todo.save()
        })
        .then(todo => {
            res.send(todo)
        })
        .catch(error => {
            next(error)
        })
}