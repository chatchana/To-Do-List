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

  handleChange = (e)=>{
    this.setState({title :e.target.value});
  }

  showAllItem = ()=>{ 
    this.setState( {isShowAll: true});
  }

  handleAdd = ()=>{
    const {id, title, toDoList} = this.state;
    const item = {
      id: id,
      title: title,
      isComplete: false,      
    }
    
    const newTodoList = [...toDoList, item]; 
    this.setState({ toDoList: newTodoList , id: id+1});
  }

  onCheckedItem = (id)=>{ 
    const {toDoList}  = this.state;   
    toDoList.map((toDo) => {
        if (toDo.id === id) {  
          toDo.isComplete ? toDo.isComplete = false : toDo.isComplete = true; 
        }
        return toDo;
    });
 
    const newCompleteList = toDoList.filter((item) => item.isComplete); 
    const newUnCompleteList = toDoList.filter((item) => !item.isComplete); 
    this.setState( {completeList: newCompleteList, unCompleteList: newUnCompleteList, toDoList: toDoList});
  }

  filterCompleteItem = ()=>{
    const {toDoList}  = this.state;  
    const newCompleteList = toDoList.filter((item) => item.isComplete); 
    const newUnCompleteList = toDoList.filter((item) => !item.isComplete); 
    const newToDoList = newCompleteList.concat(newUnCompleteList);
    this.setState( {completeList: newCompleteList, unCompleteList: newUnCompleteList, toDoList: newToDoList, isShowAll: false});
  }

  removeItem =()=>{
    const {toDoList}  = this.state;  
    const newUnCompleteList = toDoList.filter((item) => !item.isComplete);  
    this.setState( {toDoList: newUnCompleteList, completeList: []});
  }

  render() {
    const {toDoList, completeList, unCompleteList, isShowAll} = this.state; 
    return (      
        <div className="App">          
            <div class="container">
              <div class="row">
                <div class="col"><Header title="New List" /></div>
              </div> 
              <div class="row">
                <div class="col">
                  <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
                  <button type="button" onClick={this.handleAdd}> + </button>
                </div>
              </div>             
            </div>
          
          <Header title="To Do List" /> 
          <div>  
            {completeList.length}  Completed  <label className="space"></label>
            <button type="button" className="button-ext" style={isShowAll === false ? { display: 'none' } : {}} onClick={this.filterCompleteItem}>Hide</button>
            <button type="button" className="button-ext" style={isShowAll === true ? { display: 'none' } : {}} onClick={this.showAllItem}>Show All</button>            
            <button type="button" className="button-ext" onClick={this.removeItem}>Delete</button>
          </div>
          <br/>
          <div>
              {                    
                isShowAll === true ? 
                  toDoList.map((toDo) => (
                    <Item item={toDo} onCheckedItem={this.onCheckedItem} ></Item>
                  ))                  
                  :
                  unCompleteList.map((toDo) => (
                    <Item item={toDo} onCheckedItem={this.onCheckedItem} ></Item>
                  ))                
              }               
          </div>
        </div>      
    );
  }
}

export default App;