import React, { Component } from 'react';
import Header from './components/Header';
import Item from './components/Item';

import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      toDoList: [{
        id: 1,
        title: 'Task 1',
        isComplete: true,
      }, {
        id: 2,
        title: 'Task 2',
        isComplete: true,
      }, {
        id: 3,
        title: 'Task 3',
        isComplete: false,
      }, {
        id: 4,
        title: 'Task 4',
        isComplete: false,
      }]
    }
  }


  render() {
    return (
      <div className="App">
        <Header title="To Do List" />
              {
                this.state.toDoList.map((toDo) => (
                  <Item desc={toDo}></Item>
                ))
              }

      </div>

    );
  }
}

export default App;
