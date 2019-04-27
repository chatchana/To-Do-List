import React, { Component } from 'react';

class Item extends Component {

    render() {
        const {id, title, isComplete} = this.props.item;
        const {onCheckedItem} = this.props;
        return (
            <div>
                <input type="checkbox" checked={isComplete} value={id} onClick={() => onCheckedItem(id)} />                
                <label>{title}</label>
            </div>
        );
    }

}

export default Item; 