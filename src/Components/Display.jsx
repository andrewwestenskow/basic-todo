import React, { Component } from 'react'
import axios from 'axios'
import Todo from './Todo'

class Display extends Component {
  state = {
    todos: [],
    input: ''
  }

  componentDidMount() {
    axios.get('/api/todo').then(res => {
      this.setState({
        todos: res.data
      })
    })
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  handleSubmit = () => {
    axios.post('/api/todo', { text: this.state.input }).then(res => {
      this.setState({
        todos: res.data,
        text: ''
      })
    })
  }

  handleEdit = (id, text) => {
    axios.put(`/api/todo/${id}`, { text }).then(res => {
      this.setState({
        todos: res.data
      })
    })
  }

  handleDelete = (id) => {
    axios.delete(`/api/todo/${id}`).then(res => {
      this.setState({
        todos: res.data
      })
    })
  }

  render() {

    let list = this.state.todos.map(element => {
      return <Todo
        handleDelete={this.handleDelete}
        handleEdit={this.handleEdit}
        key={element.id}
        id={element.id}
        text={element.text} />
    })

    return (
      <div>
        {list}
        <input value={this.state.text} onChange={(e) => this.handleChange(e)} type="text" />
        <button onClick={this.handleSubmit}>Add Item</button>
      </div>
    )
  }
}

export default Display