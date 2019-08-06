import React, {Component} from 'react';

export default ViewTodo;

class ViewTodo extends Component {
    render() {
      return (
        <div className='h-50 col-lg-8'>
          <div className='card'>
            <div className='card-header'>View To Do Items</div>
              <div className='card-body'>
                <ul className='list-group list-group-flush'>
  
                </ul>
              </div>
          </div>
        </div>
      )
    }
  }