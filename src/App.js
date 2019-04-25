import React, { Component } from 'react';
import Header from './Header';
import Item from './Item';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      toDoList: [],
      title: "",
      id: 1
    }

    this.handleAdd = this.handleAdd.bind(this);
  }

  // onCheckedItem = (id) => {  alert("****"+id);

  // }

  handleAdd = () => {
    const newTitle = this.state.title;    
    const newId  = this.state.id;

    const todoObj = {
      id: newId,
      title: newTitle,
      isComplete: false,      
    }
    
    const toDoList  = this.state.toDoList; 
    const newTodoList = [...toDoList]; 
    newTodoList.push(todoObj); 

    this.setState({ toDoList: newTodoList , id: newId+1});
  }

  handleChange = (e) => {
    this.setState({title :e.target.value})
  }


  render() {
    return (
      <form>
        <div className="App">

          <div><input type="text" name="title" value={this.state.title} onChange={this.handleChange} /></div>
          <button type="button" onClick={this.handleAdd}>ADD</button>


          <Header title="To Do List" />

          {
            this.state.toDoList.map((toDo) => (
              <Item item={toDo}></Item>
            ))
          }

        </div>
      </form>
    );
  }
}

export default App;
