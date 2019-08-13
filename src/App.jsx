import React, { Component } from 'react';

import AddToDo from './AddToDo';
import ViewToDo from './ViewToDo';
//import EditToDo from './EditToDo';
//import Items from './Items';
//import EditToDo from './EditToDo.jsx';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      itemArr : [],
    }
  this.addToArr = this.addToArr.bind(this)
  }

  addToArr(newTodo) {
    this.state.itemArr.push(newTodo);
    this.setState({ itemArr: this.state.itemArr})
  }

  deleteFromArr(newTodo) {
    
  }

  render() {
    return (
      <div className='container'>
          <h1>Very Simple To Do App</h1>
          <p>Keep track of everything you need to get done!</p>
        <hr className='tagline'></hr>
        <div className='row'>
          <AddToDo addToArr={this.addToArr}/>
          <ViewToDo itemArr={this.state.itemArr}/>
  
        </div>
      </div>
    );
  }
}

export default App;
