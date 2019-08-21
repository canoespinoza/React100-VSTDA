import React, { Component } from "react";
import EditToDo from "./EditToDo";

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: false,
      beingEdited: false
    };
    this.alertColor = this.alertColor.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleCompletedClick = this.handleCompletedClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  alertColor(priority) {
    if (priority === "1") {
      return "list-group-item-success";
    } else if (priority === "2") {
      return "list-group-item-warning";
    } else if (priority === "3") {
      return "list-group-item-danger";
    }
  }

  handleCompletedClick() {
    this.props.completedToDo(this.props.id);
  }

  handleEditClick() {
    this.props.editToDo(this.props.id);
  }

  handleDeleteClick() {
    this.props.deleteFromArr(this.props.id);
  }

  render() {
    return (
      <div>
        {!this.props.beingEdited ? (
          <li className={this.alertColor(this.props.priority)}>
            <button type="checkbox" onClick={this.handleCompletedClick} />
            {!this.props.completed ? (
              <span>{this.props.title}</span>
            ) : (
              <s>{this.props.title}</s>
            )}
            <div className="text-right">
              <button>
                <a
                  id="delete-button"
                  className="delete-todo"
                  onClick={this.handleDeleteClick}
                >
                  <i className="fas fa-trash-alt" />
                </a>
              </button>
              <button>
                <a
                  id="edit-button"
                  className="edit-todo"
                  onClick={this.handleEditClick}
                >
                  <i className="fas fa-pencil-alt" />
                </a>
              </button>
            </div>
          </li>
        ) : (
          <EditToDo
            id={this.props.id}
            updateToDo={this.props.updateToDo}
          />
        )}
      </div>
    );
  }
}

export default Items;
