const pomodori = [
    {
        start: '2020-12-08T12:00:00.000Z',
        end: '2020-12-08T12:25:00.000Z'
    },
    {
        start: '2020-12-08T12:00:00.000Z',
        end: '2020-12-08T12:25:00.000Z'
    },
    {
        start: '2020-12-08T12:00:00.000Z',
        end: '2020-12-08T12:25:00.000Z'
    },
    {
        start: '2020-12-08T12:00:00.000Z',
        end: '2020-12-08T12:25:00.000Z'
    },
    {
        start: '2020-12-08T12:00:00.000Z',
        end: '2020-12-08T12:25:00.000Z'
    }]

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
        done: false,
        pomodori: pomodori.slice(0,4)
    }, {
        id: 3,
        title: 'Write Article',
        done: true,
        pomodori: pomodori.slice(0,5)
    }, {
        id: 4,
        title: 'Fix Bug',
        done: false,
        pomodori: pomodori.slice(0,2)
    }]

module.exports = todos;