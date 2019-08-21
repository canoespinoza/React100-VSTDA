import React, { Component } from "react";

class EditToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      priority: '3',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleClick() {
      this.props.updateToDo(this.state.title, this.state.priority, this.props.id);
  }

  render() {  
    return (
      <div className="h-50 col-lg-8">
        <div className="card">
          <div className="card-header">Edit To Do Item</div>
          <div className="card-body"> 
            <h5>Title:</h5>
            <textarea
              name='title'
              className="update-todo-text"
              onChange={this.handleChange}
            />
            <h5>Priority Level:</h5>
            <select
              name='priority'
              className="update-todo-priority"
              onChange={this.handleChange}
            >
              <option value="3">3</option>
              <option value="2">2</option>
              <option value="1">1</option>
            </select>
          </div>
          <div className="card-footer">
            <div className="text-right">
              <button
                className="btn btn-success update-todo"
                onClick={this.handleClick}
              >
                SAVE
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditToDo;
