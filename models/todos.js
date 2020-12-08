const mongoose = require('mongoose')
const pomodoroSchema = mongoose.Schema({
    start: Date,
    end: Date,
    status: String
})
pomodoroSchema.methods.df = (date) =>{
// https://stackoverflow.com/questions/10645994/how-to-format-a-utc-date-as-a-yyyy-mm-dd-hhmmss-string-using-nodejs
    return date.toISOString().
    replace(/T/, ' ').      // replace T with a space
        replace(/\..+/, '')
}

const todoSchema = mongoose.Schema({
    title: String,
    done: Boolean,
    pomodori: [{type: pomodoroSchema}],
    current: pomodoroSchema
})
todoSchema.virtual('pomodoriUsed').get(function () {
    return this.pomodori.length
})
module.exports = {
    Todo: mongoose.model('Todo', todoSchema),
    Pomodoro: mongoose.model('Pomodoro', pomodoroSchema)
}