import React, { Component } from 'react';

class Item extends Component {

    constructor(props) {
        super(props);
        this.onCheckedItem = this.onCheckedItem.bind(this);
    }

    onCheckedItem = (id) => {
        alert(id);
        // const {toDoList} = this.state.toDoList;
        // const newToDoList = [...toDoList];
        // newToDoList.map((toDo) => {
        //     if (toDo.id === id) {
        //         toDo.isComplete = true;
        //     }
        //     return toDo;
        // });
    }

    render() {
        const { id, title, isComplete } = this.props.item;
        return (
            <div>
                <input type="radio" checked={isComplete} value={id} onClick={() => this.onCheckedItem(id)} />
                {title}
            </div>
        );
    }

}

export default Item;    
