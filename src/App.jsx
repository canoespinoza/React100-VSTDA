import React, { Component } from "react";

import AddToDo from "./AddToDo";
import ViewToDo from "./ViewToDo";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemArr: [],
    };
    this.addToArr = this.addToArr.bind(this);
    this.updateToDo = this.updateToDo.bind(this);
    this.completedToDo = this.completedToDo.bind(this);
    this.editToDo = this.editToDo.bind(this);
    this.deleteFromArr = this.deleteFromArr.bind(this);
  }

  addToArr(newTodo) {
    this.state.itemArr.push(newTodo);
    this.setState({ itemArr: this.state.itemArr });
  console.log(this.state.itemArr)
  }

  updateToDo(title, priority, id) {
    this.setState(prevState => {
      prevState.itemArr.map(todo => {
        if (id === todo.id) {
          todo.title = title; 
          todo.priority = priority 
          todo.beingEdited = !todo.beingEdited
        }
        return todo;
      });
    });
  }

  deleteFromArr(id) {
    this.setState({ itemArr: [...this.state.itemArr.filter(todo => todo.id !== id)] });
  }

  completedToDo(id) {
    this.setState(prevState => {
      prevState.itemArr.map(todo => {
        if (id === todo.id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    });
  };

  editToDo(id) {
    this.setState(prevState => {
      prevState.itemArr.map(todo => {
        if (id === todo.id) {
          todo.beingEdited = !todo.beingEdited;
        }
        return todo;
      });
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className='text-light'>Very Simple To Do App</h1>
        <p className='text-light'>Keep track of everything you need to get done!</p>
        <hr className="tagline" />
        <div className="row">
          <AddToDo addToArr={this.addToArr} 
          />
          <ViewToDo
            itemArr={this.state.itemArr}
            editToDo={this.editToDo}
            addToArr={this.addToArr}
            completedToDo={this.completedToDo}
            updateToDo={this.updateToDo}
            deleteFromArr={this.deleteFromArr}
          />
        </div>
      </div>
    );
  }
};

export default App;
