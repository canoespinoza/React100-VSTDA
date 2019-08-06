import React, { Component } from 'react';

import AddToDo from './AddToDo.jsx';
import ViewToDo from './ViewToDo.jsx';
//import EditToDo from './EditToDo.jsx';


class App extends Component {
   constructor(props) {
    super(props);
    this.state = {
        todoItemArray : [],
    }
this.add = this.state.bind(this)
  }

  add(title, priority){
    const newTodo = {
      title,
      priority,
    };
    this.setState({todoItemArray: this.state.todoItemArray, newTodo}) 
  }

  render() {
    return (
      <div className='container'>
          <h1 className='text-dark'>Very Simple To Do App</h1>
          <p className='text-dark'>Keep track of everything you need to get done!</p>
        <hr className='tagline'></hr>
        <div className='row'>
          <AddToDo add={this.add}/>
          <ViewToDo/>
        </div>
      </div>
    );
  }
}

export default App;
