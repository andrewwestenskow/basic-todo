const express = require('express')
const app = express()
const SERVER_PORT = 4005
const ctrl = require('./controller')

app.use(express.json())

app.get('/api/todo', ctrl.getTodos)
app.post('/api/todo', ctrl.createTodo)
app.put('/api/todo/:id', ctrl.editTodo)
app.delete('/api/todo/:id', ctrl.deleteTodo)

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))