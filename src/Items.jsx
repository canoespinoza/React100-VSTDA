import React, {Component} from 'react';
import EditToDo from './EditToDo';

class Items extends Component {
  constructor(props) {
    super(props);
    this.state={
      completed : false,
      beingEdited : false
    }
    this.alertColor = this.alertColor.bind(this);
    this.edit = this.edit.bind(this)
  }

  alertColor(priority) {
    console.log(priority)
    if (priority === '1') {
      return "list-group-item-success";
    } else if (priority === '2') {
      return "list-group-item-warning";
    } else if (priority === '3') {
      console.log("here")
      return "list-group-item-danger";
    }
  }

  //write completed function/ checkbox functionality

  //write beingEDited function
  edit(beingEdited) {
    if (beingEdited == true) {
      return <EditToDo/>
    }
    else if (beingEdited == false)
      return 
  }

  render() {
  console.log(this.props.priority)
    return (
        <li className={this.alertColor(this.props.priority)}>
          <button type="checkbox" />
          {this.props.title}
          <div className='text-right'>
            <button className='btn btn-primary'>
              <i className="fas fa-trash-alt" />
            </button>
            <button className='btn btn-primary' onClick={this.edit}>
              <i className="fas fa-pencil-alt" />
            </button>
          </div>
        </li>
    );
  }
}

export default Items;
