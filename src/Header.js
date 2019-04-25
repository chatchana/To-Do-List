import React from 'react';

class Header extends React.Component {
  
  // handleChange = (event) => {
  //   this.setState({value: event.target.value})
  // }

  render() {
    return (
        // <h1>To Do List</h1> 
        <h1>{this.props.title}</h1>          
    );
  }
}

export default Header;