'use strict'

exports.index = (req,res,next) =>{
    res.render('todos/index',{title: 'Barnes TodoList'})
}

exports.show = (req,res,next) =>{
    const todoId = req.params.id
    res.render('todos/show',{id: todoId})
}
