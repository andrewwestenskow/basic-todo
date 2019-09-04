import React, { Component } from 'react'

class Todo extends Component {

  state = {
    edit: false,
    input: this.props.text
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  handleEdit = () => {
    this.setState({
      edit: false
    })
    this.props.handleEdit(this.props.id, this.state.input)
  }

  toggleEdit = () => {
    this.setState({
      edit: !this.state.edit
    })
  }

  render() {
    return (
      <div>
        {!this.state.edit ? <>{this.props.text}</> :
          <div>
            <input onChange={(e) => this.handleChange(e)} value={this.state.input} type="text" />
            <button onClick={this.handleEdit}>Submit</button>
          </div>}
        <button onClick={this.toggleEdit}>Edit</button>
        <button onClick={() => this.props.handleDelete(this.props.id)}>Delete</button>
      </div>
    )
  }
}

export default Todo