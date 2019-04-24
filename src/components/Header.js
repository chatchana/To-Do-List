import React from 'react';

class Header extends React.Component {
  state = {
    value: '',
    list: [{
      id: 1,
      title: 'Task'

    }

    ]
  }
  

  handleChange = (event) => {
    this.setState({value: event.target.value})
  }

  render() {
    return (
        // <h1>To Do List</h1> 
        <h1>{this.props.title}</h1>          
    );
  }
}

export default Header;