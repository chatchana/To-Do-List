import React, { Component } from 'react';

class Item extends Component {    
    render() {
        return (          
            <div>     
                <input type="radio" value={this.props.desc.id} />                
                <input type="text" name="title" value={this.props.desc.title} />                 
            </div>
        );
    }

}

export default Item;    
