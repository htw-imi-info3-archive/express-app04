const {Todo, app, request} = require("../../testSetup")

describe("Todos Index", () => {
    test("It should show todos", (done) => {
        const titles = ["Todo in Index", "Another todo in index"];
        const todoData = titles.map(title => {
            return {title: title, done: false}
        })
        Todo.create(todoData)
            .then(created => {
                request(app)
                    .get('/todos')
                    .then((res) => {
                        const body = res.text
                        for (const todo of created) {
                            expect(body).toContain(todo.title)
                        }
                        done()
                    })
            })
            .catch(error => {
                done(error.message)
            })
    })
});