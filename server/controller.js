const todos = [
  {
    id: 0,
    text: 'Go to the store'
  },
  {
    id: 1,
    text: 'Feed the dog'
  },
  {
    id: 2,
    text: 'Eat lunch'
  },
  {
    id: 3,
    text: 'Go fishing'
  }
]
let id = 4

module.exports = {
  createTodo: (req, res, next) => {
    let newItem = {
      id: id,
      text: req.body.text
    }

    todos.push(newItem)
    id++

    res.status(200).send(todos)
  },

  getTodos: (req, res, next) => {
    res.status(200).send(todos)
  },

  editTodo: (req, res, next) => {
    const { id } = req.params
    const { text } = req.body

    const index = todos.findIndex(element => +element.id === +id)

    if(index === -1){
      return res.status(404).send('Id not found')
    }

    const newItem = {
      id: todos[index].id,
      text: text
    }

    todos.splice(index, 1, newItem)

    res.status(200).send(todos)
  },

  deleteTodo: (req, res, next) => {
    const {id} = req.params

    const index = todos.findIndex(element => +element.id === +id)

    if(index === -1){
      return res.status(404).send('Id not found')
    }

    todos.splice(index, 1)

    res.status(200).send(todos)
  }
}