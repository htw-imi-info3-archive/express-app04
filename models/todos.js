const mongoose = require('mongoose')
const pomodoroSchema = mongoose.Schema({
    start: Date,
    end: Date
})
const todoSchema = mongoose.Schema({
    title: String,
    done: Boolean,
    pomodori: [{type: pomodoroSchema}]
})
todoSchema.virtual('pomodoriUsed').get(function () {
    return this.pomodori.length
})
module.exports = mongoose.model('Todo', todoSchema)
