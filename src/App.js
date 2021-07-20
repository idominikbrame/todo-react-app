import React from 'react';
import './App.css';



class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      isClicked: false,
      todos: [],
      text: ''
    }
    this.handleChange = this.handleChange.bind(this) 
    this.updateList = this.updateList.bind(this)   
  }

  componentDidMount() {
    console.log('I was mounted')
  }

  componentDidUpdate(){
    console.log('update', this.state.text)
  }

  
  handleChange = (event) => {
      this.setState({
        text: event.target.value
      })      
  }
 
  updateList = () =>{
    this.state.todos.push("- " + this.state.text)
    console.log(this.state.todos)
    this.setState({
      text: ""
    })
    document.getElementById("input").value = ""
    this.state.todos.forEach(item => {
      React.createElement("li", )
    })
  }
  render(){
    return (



      <div className="App">
        <input type="text" id="input" onChange={this.handleChange}></input>
        <input type="submit" onClick={this.updateList}></input>
        <ul>
          
        </ul>
      </div>
    )
  }
}

export default App;
