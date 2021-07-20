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
    if(this.state.text === ""){
      return alert("enter a value")
    }
    this.setState({
      todos: [...this.state.todos, { id: this.state.todos.length + 1, text: this.state.text }],
      text: ""
    })
    document.querySelector("#input").value = ""
  }

  handleClick = (evt, id) => {
    const thisId = this.state.todos.findIndex(todo => todo.id === id)
    const todoList = [...this.state.todos]
    todoList.splice(thisId, 1)
    this.setState({ todos: todoList })
    console.log(thisId)
  }

  handleChange = event => {
    this.setState({
      text: event.target.value,
    })
    
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.onClickHandler}>Add todo</button>
        <input id="input" type="text" onChange={this.handleChange}/>
        <div>
          <ul>
            {this.state.todos.map(({ text, id }) => {
              return (
                <li key={id}>
                  <h3>{text}</h3>
                  <button onClick={event => this.handleClick(event, id)}>Delete</button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default App;
