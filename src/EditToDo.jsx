import React, { Component } from "react";

class EditToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      priority: "3",
      id: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  
  handleClick() {
    let newTodo = {
      title: this.state.title,
      priority: this.state.priority,
      id: this.state.id,
      completed: false,
      beingEdited: false
    };
    //add incrememnt of id
    this.setState({ id: this.state.id + 1 });
    this.props.addToArr(newTodo);
  }
  
  render() {
    return (
      <div className="h-50 col-lg-8">
        <div className="card">
          <div className="card-header">Edit To Do Item</div>
          <div className="card-body">
            <h5>Title:</h5>
            <textarea onChange={this.handleChange}/>
            <h5>Priority Level:</h5>
            <select onChange={this.handleChange}>
              <option value="3">3</option>
              <option value="2">2</option>
              <option value="1">1</option>
            </select>
          </div>
          <div className="card-footer">
            <div className="text-right">
              <button className="btn btn-success" onClick={this.handleClick}>SAVE</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditToDo;
