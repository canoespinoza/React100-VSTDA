import React, { Component } from "react";
import Items from "./Items";

class ViewToDo extends Component {
  render() {
    return (
      <div className="h-50 col-lg-8">
        <div className="card">
          <div className="card-header">View To Do Items</div>
          <div className="card-body">
            <ul className="list-group list-group-flush list-unstyled">
              {this.props.itemArr.map(todo => (
                <Items
                  key={todo.id}
                  title={todo.title}
                  priority={todo.priority}
                  completed={todo.completed}
                  beingEdited={todo.beingEdited}
                  id={todo.id}
                  editToDo={this.props.editToDo}
                  addToArr={this.props.addToArr}
                  completedToDo={this.props.completedToDo}
                  updateToDo={this.props.updateToDo}
                  deleteFromArr={this.props.deleteFromArr}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewToDo;
