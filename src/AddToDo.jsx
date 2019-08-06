import React, {Component} from 'react';


class AddTodo extends Component {

    constructor(props) {
        super(props);
            this.state = {
                title : '',
                priority : ''
            }
    }

    handleChange(event) {
        this.setState({ [event.target.name] : event.target.value });
    }

    handleClick(event) {
        event.preventDefault();
          this.props.AddTodo(this.state.title, this.state.priority)  
          this.setState({ title : '', priority : '' })
    }

    render() {
        return (
            <div className="h-100 col-lg-4">
          <div className="card">
            <div className="card-header">Add New To Do Item</div>
            <div className="card-body">
              <h5>I need to...</h5>
              <textarea classname='create-todo-text' onChange={this.state.title}></textarea>
              <h5>Priority Level:</h5>
              <select className='create-todo-priority' onChange={this.state.priority}>
                <option value='3'>3</option>
                <option value='2'>2</option>
                <option value='1'>1</option>
              </select>
            </div>
            <div className="card card-footer">
              <button className="btn btn-block btn-success" onClick='add'>ADD</button>
            </div>
          </div>
        </div>
      );
    }
}

export default AddTodo;
