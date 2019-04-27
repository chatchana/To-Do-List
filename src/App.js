import React, { Component } from 'react';
import Header from './Header';
import Item from './Item';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      toDoList: [],
      completeList: [],
      unCmpleteList: [],
      title: "",
      id: 1,
      isShowAll: true
    }

    this.handleAdd = this.handleAdd.bind(this);
    this.onCheckedItem = this.onCheckedItem.bind(this);
  }

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
    this.setState({title :e.target.value});
  }

  onCheckedItem = (id) => { 
    const {toDoList}  = this.state;   
    toDoList.map((toDo) => {
        if (toDo.id === id) {  
          if(toDo.isComplete){
            toDo.isComplete = false;
          }else{
            toDo.isComplete = true;
          }          
        }
        return toDo;
    });
    this.setState({ toDoList: toDoList});
  }

  filterCompleteItem = () => {
    const {toDoList}  = this.state;  
    const newCompleteList = toDoList.filter((item) => !item.isComplete); 
    //const newUnCompleteList = toDoList.filter((item) => item.isComplete); 
    
    this.setState( {completeList: newCompleteList, isShowAll: false});
  }

  filterUnCompleteItem = () => {
    const {toDoList}  = this.state;  
    const newUnCompleteList = toDoList.filter((item) => item.isComplete); 
    this.setState( {unCompleteList: newUnCompleteList, isShowAll: false});
  }

  showAllItem = () => { 
    this.setState( {isShowAll: true});
  }

  render() {
    const {toDoList, completeList, isShowAll, isFilter} = this.state; 
    return (
      
        <div className="App">
          <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
          <button type="button" onClick={this.handleAdd}>ADD</button>
          <Header title="To Do List" />
          <div>
            <button type="button" onClick={this.filterCompleteItem}>HIDE</button>
            <button type="button" onClick={this.showAllItem}>SHOW ALL</button>
          </div>
          <div>
              {                    
                isShowAll === true ? 
                  toDoList.map((toDo) => (
                    <Item item={toDo} onCheckedItem={this.onCheckedItem} ></Item>
                  ))                  
                  :
                  completeList.map((toDo) => (
                    <Item item={toDo} onCheckedItem={this.onCheckedItem} ></Item>
                  ))                
              }               
          </div>
        </div>      
    );
  }
}

export default App;