import React, {Component} from 'react';

class AddToDo extends Component {

    constructor(props) {
        super(props);
        this.state={
            title : '',
            priority : '3',
            id : 0,
        }
       this.handleChange = this.handleChange.bind(this);
       this.handleClick = this.handleClick.bind(this);
    }
 
    handleChange(event) {
      this.setState({ [event.target.name] : event.target.value });
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
      this.setState({ id : this.state.id + 1 });
      this.props.addToArr(newTodo)
    }

    

    render() {
        return (
        <div className="h-100 col-lg-4">
          <div className="card">
            <div className="card-header">Add New To Do Item</div>
            <div className="card-body">
              <h5>I need to...</h5>
              <textarea className='create-todo-text' name='title' 
                onChange={this.handleChange}
                value={this.state.title}> 
              </textarea>
              <h5>Priority Level:</h5>
              <select className='w-100 create-todo-priority' name='priority' 
                onChange={this.handleChange}
                value={this.state.priority}>
                <option value='3'>3</option>
                <option value='2'>2</option>
                <option value='1'>1</option> 
              </select>
            </div>
            <div className="card card-footer">
              <button className="btn btn-block btn-success" 
              onClick={this.handleClick}>ADD
              </button>
            </div>
          </div>
        </div>
      );
    }
}

export default AddToDo;
