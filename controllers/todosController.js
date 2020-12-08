'use strict'
const todos = [
    {
        id: 0,
        title: 'Do Nothing',
        done: false
    },
    {
        id: 1,
        title: 'Read Book',
        done: true,
        pomodori: [
            {
                start: '2020-12-08T12:00:00.000Z',
                end: '2020-12-08T12:25:00.000Z'
            },
            {
                start: '2020-12-08T12:00:00.000Z',
                end: '2020-12-08T12:25:00.000Z'
            }]
    }, {
        id: 2,
        title: 'Buy Milk',
        done: false
    }, {
        id: 3,
        title: 'Write Article',
        done: true
    }, {
        id: 4,
        title: 'Fix Bug',
        done: false
    }]


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