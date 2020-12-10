const request = require("supertest");
const app = require("../../../app");
const {Todo} = require("../../../models/todos")

describe("Todos Index", () => {
    test("It should show todos", () => {
        const titles = ["Todo in Index 1", "Another todo in index"];
        const todoData = titles.map(title => {return {title: title, done: false}})
        Todo.create(todoData)
            .then(created => {
                request(app)
                    .get('/todos')
                    .then((res) => {
                        const body = res.text
                        for (const todo of created) {
                            expect(body).toContain("some arbitrary wrong text")
                        }
                        //done()
                    })
            })
            .catch(error => {
                console.log(error.message)
            })
    })
});