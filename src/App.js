import React from 'react';
import './App.css';



class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isClicked: false,
      todos: [],
      text: ""
    }
  }

  onClickHandler = () => {
    this.setState({
      todos: [...this.state.todos, { id: this.state.todos.length + 1, text: this.state.text }],
      text: ""
    })
    this.refs.inputField.value=""
  }

  handleClick = (evt, id) => {
    console.log(id)
    const foundIndex = this.state.todos.findIndex(todo => todo.id === id)
    const copy = [...this.state.todos]
    copy.splice(foundIndex, 1)
    this.setState({ todos: copy })
    console.log(foundIndex)
    console.log(this)
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.onClickHandler}>Add todo</button>
        <input type="text" onChange={this.handleChange} ref="inputField"/>
        <div>
          <ul>
            {this.state.todos.map(({ text, id }) => {
              return (
                <ul>
                <li>
                  <h3>{text}</h3>
                  <button onClick={event => this.handleClick(event, id)}>Delete</button>
                </li>
                </ul>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default App;
