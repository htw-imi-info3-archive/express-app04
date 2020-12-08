'use strict'

exports.index = (req,res,next) =>{
    res.render('todos/index',{title: 'Barnes TodoList'})
}

exports.show = (req,res,next) =>{
    const todoId = req.params.id
    res.render('todos/show',{id: todoId})
}

exports.create = (req,res,next) =>{
    const newTodo = getParams(req.body)
    res.send({todo: newTodo, body: req.body})
}

function getParams (body) {
    const o = {}
        if (body['title']) {
            o['title'] = body['title']
        }
    return o;
}