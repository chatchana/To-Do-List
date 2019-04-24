import React, { Component } from 'react';

class Item extends Component {    
    render() {
        return (          
            <div>     
                <input type="radio" checked={this.props.desc.isComplete} onClick="" />                                
                {this.props.desc.title}                               
            </div>
        );
    }

}

export default Item;    
